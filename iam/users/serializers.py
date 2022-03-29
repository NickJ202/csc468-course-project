from rest_framework import serializers
from .models import UserManager, User, Organization, Event

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "email", "first_name", "last_name", "phone"]

class OrgSerializer(serializers.ModelSerializer):
    class Meta:
        model = Organization
        fields = ["id", "name", "address_1", "address_2", "postal_code", "locality", "state", "country", "phone", "contact"]