from rest_framework import serializers
from .models import UserManager, User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["email", "first_name", "last_name", "phone"]