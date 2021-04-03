from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.exceptions import PermissionDenied, NotFound
from rest_framework import serializers
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from .models import Pet
from .serializers import PetSerializer

@api_view(['GET', "POST", "PUT", "DELETE"])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def PetView(request):
    user = request.user
    if request.method == "GET":
        pets = list()
        if user.role == 1:
            pets = Pet.objects.filter(owner=user.id)
        elif user.role == 2:
            pets = Pet.objects.all()
        serializer = PetSerializer(pets, many=True)
        data={"status": "success", "data": {"pets": serializer.data}}
        return Response(data)

    elif request.method == "POST":
        if user.role == 1:
            if 'owner' in request.data and request.data['owner'] != user.id:
                raise PermissionDenied()
            elif 'owner' not in request.data or request.data['owner'] == user.id:
                data = dict(request.data, owner=user.id)
                serializer = PetSerializer(data=data)
                if serializer.is_valid(raise_exception=True):
                    serializer.save()
                    data={"status": "success", "data": {"pet": serializer.data}}
                    return Response(data)

                raise serializers.ValidationError()

        elif user.role == 2:
            serializer = PetSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)

            raise serializers.ValidationError()

@api_view(['GET', "PUT", "DELETE"])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def PetDetailView(request, pk):
    try:
        pet = Pet.objects.get(pk=pk)
    except Pet.DoesNotExist:
        raise serializers.ValidationError()


    user = request.user
    if user.role == 1:
        if(pet.owner.id != user.id):
            raise PermissionDenied()


    if request.method == "GET":
        serializer = PetSerializer(pet)
        return Response(serializer.data)

    elif request.method == "PUT":
        serializer = PetSerializer(pet, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            data={"status": "success", "pet": serializer.data}
            return Response(data, status=status.HTTP_200_OK)
        raise serializers.ValidationError()

    elif request.method == "DELETE":
        pet.delete()
        return Response({"status": "success","message": "Pet is removed"}, status=status.HTTP_200_OK)
