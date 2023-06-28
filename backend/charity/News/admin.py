from django.contrib import admin

# Register your models here.


from .models import News



@admin.register(News)
class NewsAdmin(admin.ModelAdmin):
    exclude =('seen_count',)
    list_display = ['title','created_date','summary','seen_count']
    list_filter = ['seen_count','created_date']
    search_fields = ['title']

