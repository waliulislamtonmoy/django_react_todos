from django.db import models

# Create your models here.

class Todo(models.Model):
    title=models.CharField(max_length=100,unique=True)
    description=models.TextField(max_length=400,null=True,blank=True)
    date=models.DateField(auto_now_add=True,blank=True,null=True)


    def __str__(self):
        return self.title