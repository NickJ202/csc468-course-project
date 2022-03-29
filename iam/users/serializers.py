from rest_framework import serializers
from .models import UserManager, User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["email", "username", "firstname", "lastname", "start_date", "about", "is_staff", "is_active", "address_1", "address_2", "postal_code", "locality", "state", "country", "org_name", "phone"]