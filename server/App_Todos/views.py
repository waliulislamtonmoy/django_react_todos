from django.shortcuts import render

# Create your views here.

from App_Todos.models import Todo
from App_Todos.serializer import TodoSerializer

from rest_framework.viewsets import ModelViewSet
from rest_framework import parsers

class TodoViewSet(ModelViewSet):
    queryset=Todo.objects.all().order_by('-id')
    serializer_class=TodoSerializer
    parser_classes=[parsers.JSONParser,parsers.MultiPartParser,parsers.FormParser]
