from rest_framework import serializers
from .models import Room, RoomReservation, Groom, GroomReservation,  GroomSchedule

class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = ['id', 'name', 'type', 'price']

class RoomReservationSerializer(serializers.ModelSerializer):
    pet = serializers.StringRelatedField()

    class Meta:
        model = RoomReservation
        fields = ['id', 'check_in_date', 'check_out_date', 'room', 'owner', 'pet', 'status']

class GroomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Groom
        fields = ['id', 'name', 'price', 'type']

class GroomReservationSerializer(serializers.ModelSerializer):
    pet = serializers.StringRelatedField()
    class Meta:
        model = GroomReservation
        fields = ['id', 'date_time', 'groom', 'owner', 'pet', 'status']

class GroomScheduleSerializer(serializers.ModelSerializer):
    class Meta:
        model = GroomSchedule
        fields = ['id', 'time_period']
