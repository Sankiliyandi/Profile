from django.contrib import admin
from django.urls import path, include
from .views import home, about, contact



urlpatterns = [
    path('',home,name='home'),
    path('contact/',
    contact,name='contact'),
    path('about/',about,name='about'),
    
    
    
]