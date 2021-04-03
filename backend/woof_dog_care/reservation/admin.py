from django.contrib import admin
from .models import Room, RoomReservation, Groom, GroomSchedule, GroomReservation

admin.site.register(Room)
admin.site.register(RoomReservation)
admin.site.register(Groom)
admin.site.register(GroomSchedule)
admin.site.register(GroomReservation)
