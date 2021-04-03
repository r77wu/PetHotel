from django.db import models
from account.models import Account

class Pet(models.Model):
    name = models.CharField(max_length=30)
    age = models.CharField(max_length=5, choices=(('Puppy', 'Puppy'), ('Adult', 'Adult')))
    breed = models.CharField(max_length=50)
    gender = models.CharField(max_length=6, choices=(('Male', 'Male'), ('Female', 'Female')))
    owner = models.ForeignKey(Account, on_delete=models.CASCADE)

    def __str__(self):
        return self.name
