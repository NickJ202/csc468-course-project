from rest_framework import serializers

from .models import Organization
from users.models import User
from users.serializers import UserSerializer

class OrgSerializer(serializers.ModelSerializer):
    admin = UserSerializer()

    class Meta:
        model = Organization
        fields = [
            "id",
            "name",
            "address_1",
            "locality",
            "administrative_area",
            "postal_code",
            "country",
            "admin"
        ]

    def create(self, validated_data):
        admin_data = validated_data.pop('admin')
        admin_data['is_active'] = True
        admin = User.objects.create(**admin_data)
        admin.set_password(admin_data['password'])
        admin.save()

        validated_data['admin'] = admin
        org = Organization.objects.create(**validated_data)
        return org


class OrgReadSerializer(OrgSerializer):
    admin = UserSerializer()
