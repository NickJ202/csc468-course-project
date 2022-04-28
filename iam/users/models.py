from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, \
    BaseUserManager  # PermissionsMixin is an abstract model that gives all methods & database fields needed to support permission model
from django.db import models
from django.utils import timezone
from django.utils.translation import gettext_lazy as trans  # gettext_lazy is a translation function

class UserManager(BaseUserManager):

    def create_superuser(self, email, password, **other_fields):

        other_fields.setdefault('is_staff', True)
        other_fields.setdefault('is_superuser', True)
        other_fields.setdefault('is_active', True)
        other_fields.setdefault('is_organizer', True)

        if other_fields.get('is_staff') is not True:
            raise ValueError(
                'Superuser must be assigned to is_staff=True.')
        if other_fields.get('is_superuser') is not True:
            raise ValueError(
                'Superuser must be assigned to is_superuser=True.')

        return self.create_user(email, password, **other_fields)

    def create_user(self, email, password, **other_fields):

        # Validation
        if not email:
            raise ValueError(trans('Please provide an email address'))

        other_fields.setdefault('is_active', True)
        email = self.normalize_email(email)  # normalize_email lowercases the domain part of email
        user = self.model(email=email, **other_fields)

        user.set_password(password)
        user.save()
        return user


class User(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(trans('email address'), unique=True)
    password = models.CharField(max_length=150)
    first_name = models.CharField(max_length=150)
    last_name = models.CharField(max_length=150)
    phone = models.CharField(max_length=150)

    is_organizer = models.BooleanField(default=False)
    is_attendee = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=False)
    date_joined = models.DateTimeField(default=timezone.now)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    objects = UserManager()

    def __str__(self):
        return self.email
