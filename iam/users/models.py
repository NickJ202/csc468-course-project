from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager #PermissionsMixin is an abstract model that gives all methods & database fields needed to support permission model 
from django.db import models
from django.utils import timezone
from django.utils.translation import gettext_lazy as trans #gettext_lazy is a translation function


class CustomAccountManager(BaseUserManager):

    def create_superuser(self, email, username, firstname, lastname, password, **other_fields):

        other_fields.setdefault('is_staff', True)
        other_fields.setdefault('is_superuser', True)
        other_fields.setdefault('is_active', True)

        if other_fields.get('is_staff') is not True:
            raise ValueError(
                'Superuser must be assigned to is_staff=True.')
        if other_fields.get('is_superuser') is not True:
            raise ValueError(
                'Superuser must be assigned to is_superuser=True.')

        return self.create_user(email, username, firstname, lastname, password, **other_fields)

    def create_user(self, email, username, firstname, lastname, password, **other_fields):

        #Validation
        if not email:
            raise ValueError(trans('Please provide an email address'))

        email = self.normalize_email(email) #normalize_email lowercases the domain part of email
        user = self.model(email=email, username=username, firstname=firstname, lastname=lastname, **other_fields)
        
        user.set_password(password)
        user.save()
        return user

class newUser(AbstractBaseUser, PermissionsMixin):

    email = models.EmailField(trans('email address'), unique=True)
    #field is set to unique when value is entered into a field once and cannot be entered again in any other instance of that model
    
    username = models.CharField(max_length=150, unique=True)
    firstname = models.CharField(max_length=150, blank=False)
    lastname = models.CharField(max_length=150, blank=False)

    #blank=True allows that form to be an empty value, if False, then doesn't allow that form to be left empty
    
    start_date = models.DateTimeField(default=timezone.now)
    about = models.TextField(trans(
        'about'), max_length=500, blank=True)
    is_staff = models.BooleanField(default=False) #determines if user can log into Django Admin pages
    is_active = models.BooleanField(default=False) #determines whether this user account should be considered active 

    objects = CustomAccountManager()
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username','firstname', 'lastname']

    def __str__(self):
        return self.username