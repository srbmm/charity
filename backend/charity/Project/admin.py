from django.contrib import admin

from .models import Project


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ['title','budget','state','support_fund']
    list_filter = ['state','topic','support_fund']
