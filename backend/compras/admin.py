from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import Compra

@admin.register(Compra)
class CompraAdmin(admin.ModelAdmin):
    list_display = ('id', 'usuario', 'nombre', 'codigo', 'precio', 'cantidad', 'estado', 'fecha')
    list_filter = ('estado', 'usuario')
    search_fields = ('nombre', 'codigo')
    