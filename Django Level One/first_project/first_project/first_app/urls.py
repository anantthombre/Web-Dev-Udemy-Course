##created to map app url to project url
from django.urls import path
from first_app import views

urlpatterns = [
    path('', views.index, name = 'index') 
]