from rest_framework import serializers
from .models import Compra

class CompraSerializer(serializers.ModelSerializer):
    class Meta:
        model = Compra
        fields = ['id',
                  'usuario',
                  'codigo',
                  'nombre',
                  'precio',
                  'cantidad',
                  'fecha',
                  'estado']
        read_only_fields = ['id', 'fecha', "usuario"]