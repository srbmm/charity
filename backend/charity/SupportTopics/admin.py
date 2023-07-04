from django.contrib import admin

# Register your models here.
from .models import SupportTopics








@admin.register(SupportTopics)
class SupportTopicsAdmin(admin.ModelAdmin):
    list_display = ['title','topic','budget','progress']
    list_filter = ['topic']


