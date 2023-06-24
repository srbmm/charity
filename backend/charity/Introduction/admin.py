from django.contrib import admin

from .models import Vision



@admin.register(Vision)
class VisionAdmin(admin.ModelAdmin):
    list_display = ['title','last_update']
    
    def has_add_permission(self, request, obj=None):
        # Disable the 'Add' button
        return False
    




