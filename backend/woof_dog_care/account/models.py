from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token

class AccounrManager(BaseUserManager):
    def create_user(self, email, password=None):
        if not email:
            raise ValueError("Users must have a email address")

        user = self.model(
            email = self.normalize_email(email),
        )

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password):
        user = self.create_user(
            email = self.normalize_email(email),
            password = password
        )
        user.is_admin = True
        user.is_staff = True
        user.is_superuser = True
        user.role = 2
        user.save(using=self._db)
        return user


class Account(AbstractBaseUser):
    email = models.EmailField(verbose_name='email', max_length=100, unique=True)
    role = models.PositiveSmallIntegerField(choices=((1, "Customer"), (2, "Employee")), default=1)
    date_joined = models.DateTimeField(verbose_name='date joined', auto_now_add=True)
    last_login = models.DateTimeField(verbose_name='last login', auto_now=True)
    is_admin = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []
    objects = AccounrManager()

    def __str__(self):
        return self.email

    def has_perm(self, perm, obj=None):
        return self.is_admin

    def has_module_perms(self, app_label):
        return True

class Profile(models.Model):
    first_name = models.CharField(max_length=30, blank=True, )
    last_name = models.CharField(max_length=30, blank=True, )
    phone = models.CharField(max_length=15, blank=True, )
    user = models.OneToOneField(Account, on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.user}'

@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)
