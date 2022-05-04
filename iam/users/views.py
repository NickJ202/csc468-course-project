from rest_framework import generics
from django.http import HttpResponse, JsonResponse
from users.serializers import UserSerializer
from django.http import Http404
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token

from .models import User
from orgs.models import Organization


class AuthToken(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data,
                                           context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        org = Organization.objects.filter(admin_id=user.id)[0]
        token, created = Token.objects.get_or_create(user=user)

        return Response({
            'token': token.key,
            'user_id': user.pk,
            'org': org.id,
            'email': user.email
        })


class UserListView(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    permission_classes = [permissions.IsAuthenticated]


class UserDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    permission_classes = [permissions.IsAuthenticated]


class UserDetailView(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class UserDetailView(generics.UpdateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class UserDetailView(generics.DestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
