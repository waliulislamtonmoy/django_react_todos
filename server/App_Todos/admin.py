from django.contrib import admin

# Register your models here.
from App_Todos.models import Todo
class TodoAdmin(admin.ModelAdmin):
    list_display=["id","title","description","date"]
    search_fields = ['id']

    list_filter = ['id']
admin.site.register(Todo,TodoAdmin)