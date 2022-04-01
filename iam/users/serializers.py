from rest_framework import serializers
from .models import UserManager, User, Organization, Event

class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ["id", "email", "first_name", "last_name", "phone"]

class OrgSerializer(serializers.ModelSerializer):
    # contact = serializers.StringRelatedField() #works for only email representation
    contact = UserSerializer()

    class Meta:
        model = Organization
        fields = ["id", "name", "address_1", "address_2", "postal_code", "locality", "state", "country", "phone", "contact"]
    
    def create(self, validated_data):
        contact_data = validated_data.pop('contact')
        org = Organization.objects.create(**validated_data)
        contact_data.append(org.id)
        contact = User.objects.create(**contact_data)
        return org

class OrgReadSerializer(OrgSerializer):
    contact = UserSerializer()

    # def to_representation(self, instance):
    #     data = super().to_representation(instance)
    #     data['contact'] = UserSerializer(
    #         User.objects.get(pk=data['contact'])).data
    #     return data
    # def create(self, validated_data):
    #     contact_id = validated_data.pop('contact')
    #     contact = User.objects.filter(id=contact_id)
    #     org = Organization.objects.create(**validated_data.append(contact))