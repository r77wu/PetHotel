from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from .models import Profile
from .serializers import ProfileSerializer, RegistrationSerializer
from rest_framework.authtoken.models import Token
from rest_framework import status

@api_view(['POST'])
def regirstrationView(request):
    if request.method == 'POST':
        serializer = RegistrationSerializer(data=request.data)
        data = {}
        if serializer.is_valid():
            account = serializer.save()
            data['status'] = 'success'
            token = Token.objects.get(user=account).key
            data['data'] = {"email": account.email, "token": token}
            return Response(data, status=status.HTTP_201_CREATED)
        else:
            data['status'] = 'error'
            data['message'] = serializer.errors['email'][0]
            return Response(data, status=status.HTTP_400_BAD_REQUEST)

class CustomAuthToken(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data,
                                           context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        data = {}
        data['status'] = 'success'
        data['data'] = {"email": user.email, "token": token.key}
        return Response(data, status=status.HTTP_200_OK)

@api_view(["GET", "POST", "PUT", "DELETE"])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def ProfileView(request):
    if request.method == "GET":
        userId = request.user.id
        try:
            profile = Profile.objects.get(user=userId)
        except Profile.DoesNotExist:
            return Response({"status": "fail","message": "Please create your Profile"}, status=status.HTTP_200_OK)
        serializer = ProfileSerializer(profile)
        data = {"status": "success", "profile": serializer.data}
        return Response(data)


    elif request.method == "POST":
        userId = request.user.id
        data = dict(request.data, user=userId)
        serializer = ProfileSerializer(data=data)
        if serializer.is_valid():
            profile = serializer.save()
            data = {"status": "success", "profile": serializer.data}
            return Response(data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == "PUT":
        user = request.user
        serializer = ProfileSerializer(user.profile, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            data = {"status": "success", "profile": serializer.data}
            return Response(data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
