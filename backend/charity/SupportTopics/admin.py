from django.contrib import admin

from .models import SupportTopics


@admin.register(SupportTopics)
class SupportTopicsAdmin(admin.ModelAdmin):
    list_display = ['title','topic','budget','progress']
    list_filter = ['topic']
