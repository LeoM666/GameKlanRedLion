from django.urls import path

from . import views

urlpatterns = [
    path('', views.poolofmemory, name='PoolOfMemory'),
]