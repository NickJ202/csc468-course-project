from django.core.serializers.json import Serializer, DjangoJSONEncoder

class JSONSerializer(Serializer):
    def get_dump_object(self, obj):
        self._current[obj._meta.pk.name] = obj._get_pk_val()
        return self._current