from django.urls import path, include
from rest_framework import routers
from .views import RoomView, RoomReservationView, CheckAvailableRoom, GroomView, GroomScheduleView, CheckAvailableGroom, GroomReservationView

router = routers.SimpleRouter()
router.register('rooms', RoomView)
router.register('roomReservation', RoomReservationView)
router.register('groom', GroomView)
router.register('groomSchedule', GroomScheduleView)
router.register('groomReservation', GroomReservationView)

urlpatterns = [
    path('', include(router.urls)),
    path('availableRooms/', CheckAvailableRoom, name='Available Rooms'),
    path('availableGrooms/', CheckAvailableGroom, name='Available Grooms')
]
