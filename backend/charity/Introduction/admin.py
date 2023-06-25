from django.contrib import admin

from .models import (
    Vision,History,Mission,Chart,
    Statute,Values,Permissions
)

@admin.register(Vision)
class VisionAdmin(admin.ModelAdmin):
    list_display = ['title','last_update']
    
    def has_add_permission(self, request, obj=None):
        if Vision.objects.exists():
            return False  
        return True# disable the button if Vision exists
        

@admin.register(History)
class HistoryAdmin(admin.ModelAdmin):
    list_display = ['title','last_update']
    
    def has_add_permission(self, request, obj=None):
        if History.objects.exists():
            return False  
        return True# disable the button if Vision exists


@admin.register(Mission)
class MissionAdmin(admin.ModelAdmin):
    list_display = ['title','last_update']
    
    def has_add_permission(self, request, obj=None):
        if Mission.objects.exists():
            return False  
        return True# disable the button if Vision exists


@admin.register(Chart)
class ChartAdmin(admin.ModelAdmin):
    list_display = ['title','last_update']
    exclude = ['title']
    
    def has_add_permission(self, request, obj=None):
        if Chart.objects.exists():
            return False  
        return True# disable the button if Vision exists


@admin.register(Statute)
class StatuteAdmin(admin.ModelAdmin):
    list_display = ['title','last_update']
    
    def has_add_permission(self, request, obj=None):
        if Statute.objects.exists():
            return False  
        return True# disable the button if Vision exists



@admin.register(Values)
class ValuesAdmin(admin.ModelAdmin):
    list_display = ['title','last_update']
    
    def has_add_permission(self, request, obj=None):
        if Values.objects.exists():
            return False  
        return True# disable the button if Vision exists
    

@admin.register(Permissions)
class PermissionsAdmin(admin.ModelAdmin):
    list_display = ['title','last_update']










    




