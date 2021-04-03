from django.db import models
from account.models import Account
from pet.models import Pet

class Room(models.Model):
    name = models.CharField(max_length=30)
    price = models.DecimalField(max_digits=4, decimal_places=2)
    type = models.PositiveSmallIntegerField(choices=((1, "Standard"), (2, "Luxury")))

    def __str__(self):
        return self.name

class RoomReservation(models.Model):
    check_in_date = models.DateField()
    check_out_date = models.DateField()
    room = models.ForeignKey(Room, on_delete=models.CASCADE, related_name='related_reservation')
    owner = models.ForeignKey(Account, on_delete=models.CASCADE)
    pet = models.ForeignKey(Pet, on_delete=models.CASCADE)
    status = models.PositiveSmallIntegerField(choices=((1, "Confirm"), (2, "Cancel")), default=1)

    def __str__(self):
        return f"Order: {self.id}"

class Groom(models.Model):
    name = models.CharField(max_length=30)
    price = models.DecimalField(max_digits=4, decimal_places=2)
    type = models.PositiveSmallIntegerField(choices=((1, 'Bath'), (2, "Bath and HairCut")))

    def __str__(self):
        return self.name

class GroomSchedule(models.Model):
    time_period = models.TimeField()

    def __str__(self):
        return f"{self.time_period}"

class GroomReservation(models.Model):
    date_time = models.DateTimeField()
    groom = models.ForeignKey(Groom, on_delete=models.CASCADE)
    owner = models.ForeignKey(Account, on_delete=models.CASCADE)
    pet = models.ForeignKey(Pet, on_delete=models.CASCADE)
    status = models.PositiveSmallIntegerField(choices=((1, "Confirm"), (2, "Cancel")), default=1)

    def __str__(self):
        return f"Order: {self.id}"
