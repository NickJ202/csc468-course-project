from rest_framework import serializers
from .models import UserManager, User


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = [
            "id",
            "email",
            "password",
            "first_name",
            "last_name",
            "phone",
        ]

    # def to_representation(self, instance):
    #     data = super().to_representation(instance)
    #     data['admin'] = UserSerializer(
    #         User.objects.get(pk=data['admin'])).data
    #     return data
    # def create(self, validated_data):
    #     contact_id = validated_data.pop('admin')
    #     admin = User.objects.filter(id=contact_id)
    #     org = Organization.objects.create(**validated_data.append(admin))
