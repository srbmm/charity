from django.contrib import admin

from .models import Info,Links


@admin.register(Info)
class InfoAdmin(admin.ModelAdmin):
    list_display = ['title']
    exclude = ('title',)
    
    def has_add_permission(self, request, obj=None) -> bool:
        if Info.objects.exists():
            return False  
        return True # disable the button if Vision exists
    


@admin.register(Links)
class LinksAdmin(admin.ModelAdmin):
    list_display = ['title']

    def has_add_permission(self, request,object = None) -> bool:
        if Links.objects.all().count() > 6:
            return False
        return True
        





