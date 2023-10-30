from django.urls import path


from App_Todos.views import TodoViewSet
from rest_framework import routers
router = routers.DefaultRouter()
router.register('todos', TodoViewSet)
urlpatterns = [
   
]+router.urls