from django.contrib import admin

from .models import PreviousBoard,CurrentBoard,Inspectors,Founders,Trustees,Members


@admin.register(Members)
class MembersAdmin(admin.ModelAdmin):
    list_display = ['full_name','avatar','biography','created_date']
    list_filter = ['created_date']
    search_fields = ['full_name']


@admin.register(Founders)
class FoundersAdmin(admin.ModelAdmin):
    list_display = ['full_name','avatar','biography','created_date']
    list_filter = ['created_date']
    search_fields = ['full_name']


@admin.register(PreviousBoard)
class PreviousBoardAdmin(admin.ModelAdmin):
    list_display = ['full_name','avatar','biography','created_date']
    list_filter = ['created_date']
    search_fields = ['full_name']

@admin.register(CurrentBoard)
class CurrentBoardAdmin(admin.ModelAdmin):
    list_display = ['full_name','avatar','biography','created_date']
    list_filter = ['created_date']
    search_fields = ['full_name']


@admin.register(Trustees)
class TrusteesAdmin(admin.ModelAdmin):
    list_display = ['full_name','avatar','biography','created_date']
    list_filter = ['created_date']
    search_fields = ['full_name']


@admin.register(Inspectors)
class InspectorsAdmin(admin.ModelAdmin):
    list_display = ['full_name','avatar','biography','created_date']
    list_filter = ['created_date']
    search_fields = ['full_name']
