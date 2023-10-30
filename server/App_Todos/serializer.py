from App_Todos.models import Todo
from rest_framework.serializers import ModelSerializer

class TodoSerializer(ModelSerializer):
    class Meta:
        model=Todo
        fields=['id','title',"description","date"]