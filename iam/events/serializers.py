from rest_framework import serializers

from .models import Event

class EventSerializer(serializers.ModelSerializer):

    class Meta:
        model = Event
        fields = [
            "id",
            "title",
            "description",
            "start_date",
            "end_time",
            "min_attendees",
            "max_attendees",
            "tips",
            "address_1",
            "locality",
            "administrative_area",
            "postal_code",
            "country",
            "org",
        ]

    def create(self, validated_data):
        event = Event.objects.create(**validated_data)
        return event