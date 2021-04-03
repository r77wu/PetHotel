from django.shortcuts import render
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework import viewsets, status
from rest_framework.response import Response
from .serializers import RoomSerializer, RoomReservationSerializer, GroomSerializer, GroomReservationSerializer, GroomScheduleSerializer
from .models import Room, RoomReservation, Groom, GroomReservation, GroomSchedule
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import BasePermission, IsAdminUser, SAFE_METHODS
from .utils import checkAvailableTimePeriod

class ReservationPermission(BasePermission):
    def has_object_permission(self, request, view, obj):
        if request.user.role == 2:
            return True
        return obj.owner == request.user

class GroomView(viewsets.ModelViewSet):
    queryset = Groom.objects.all()
    serializer_class = GroomSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAdminUser]

class RoomView(viewsets.ModelViewSet):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAdminUser]

class GroomScheduleView(viewsets.ModelViewSet):
    queryset = GroomSchedule.objects.all()
    serializer_class = GroomScheduleSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAdminUser]

@api_view(["POST"])
def CheckAvailableRoom(request):
    if request.method == "POST":
        availableStandardRoom = Room.objects.exclude(related_reservation__check_in_date__lt=request.data['check_out_date'], related_reservation__check_out_date__gt=request.data['check_in_date']).filter(type=1)
        availableLuxuryRoom = Room.objects.exclude(related_reservation__check_in_date__lt=request.data['check_out_date'], related_reservation__check_out_date__gt=request.data['check_in_date']).filter(type=2)
        standardRoomSerializer = RoomSerializer(availableStandardRoom, many=True)
        luxaryRoomSerializer = RoomSerializer(availableLuxuryRoom, many=True)
        data={"StandardRoom": standardRoomSerializer.data, "LuxuryRoom": luxaryRoomSerializer.data}
        return Response(data)



@api_view(["POST"])
def CheckAvailableGroom(request):
    if request.method == "POST":
        orders = GroomReservation.objects.filter(date_time__date=request.data['date'])
        availablePeriod = checkAvailableTimePeriod(orders)
        data = {"availablePeriod": availablePeriod}
        return Response(data)
        # occupiedPeriod = list()
        # for order in orders:
        #     occupiedPeriod.append(order.date_time.time())
        # availablePeriod = GroomSchedule.objects.exclude(time_period__in=occupiedPeriod)
        # serializer = GroomScheduleSerializer(availablePeriod, many=True)
        # return Response(serializer.data)



class RoomReservationView(viewsets.ModelViewSet):
    queryset = RoomReservation.objects.all()
    serializer_class = RoomReservationSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [ReservationPermission]

    def get_queryset(self):
        if self.action == 'list' and self.request.user.role == 1:
            return self.queryset.filter(owner = self.request.user.id)
        return self.queryset



    def create(self, request):
        data = request.data
        if request.user.role == 1:
            data['owner'] = request.user.id

        serializer = RoomReservationSerializer(data=data)
        if serializer.is_valid():
            check_in_date = serializer.validated_data['check_in_date']
            check_out_date = serializer.validated_data['check_out_date']
            pet = serializer.validated_data['pet']
            order = RoomReservation.objects.filter(check_in_date=check_in_date, check_out_date=check_out_date, pet=pet)
            if len(order) != 0:
                return Response({'Message': "Reservation for your pet has already exist for this period."}, status=status.HTTP_400_BAD_REQUEST)

            serializer.save()
            res_data = {"status": "success", "data": {"order": serializer.data}}
            return Response(res_data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class GroomReservationView(viewsets.ModelViewSet):
    queryset = GroomReservation.objects.all()
    serializer_class = GroomReservationSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [ReservationPermission]

    def get_queryset(self):
        if self.action == 'list' and self.request.user.role == 1:
            return self.queryset.filter(owner = self.request.user.id)
        return self.queryset

    def create(self, request):
        data = request.data
        if request.user.role == 1:
            data['owner'] = request.user.id

        serializer = GroomReservationSerializer(data=data)
        if serializer.is_valid():
            date_time = serializer.validated_data['date_time']
            pet = serializer.validated_data['pet']
            order = GroomReservation.objects.filter(date_time=date_time, pet=pet)
            if len(order) != 0:
                return Response({'Message': "Reservation for your pet has already exist for this period."}, status=status.HTTP_400_BAD_REQUEST)

            serializer.save()
            res_data = {"status": "success", "data": {"order": serializer.data}}
            return Response(res_data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
