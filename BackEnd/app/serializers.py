from rest_framework import serializers
from .models import Administrador

class AdministradorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Administrador
        fields = ['name', 'email', 'password', 'foto']
        extra_kwargs = {'password': {'write_only': True}}

class CustomTokenObtainPairSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)

    def validate(self, data):
        #from django.contrib.auth.hashers import check_password

        email = data.get("email")
        password = data.get("password")

        try:
            admin = Administrador.objects.get(email=email)
        except Administrador.DoesNotExist:
            raise serializers.ValidationError("El administrador no existe")

        if password != admin.password:
            raise serializers.ValidationError("Contraseña incorrecta")

        from rest_framework_simplejwt.tokens import RefreshToken
        refresh = RefreshToken.for_user(admin)
        return {
            'refresh': str(refresh),
            'access': str(refresh.access_token),
        }