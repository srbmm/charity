



from django.db.models.signals import pre_save
from django.dispatch import receiver
from .models import News





@receiver(pre_save, sender=News)
def limit_selected_news(sender, instance, **kwargs):
    selected_count = News.objects.filter(is_selected=True).count()
    if selected_count >= 6 and instance.is_selected:
        non_selected_news = News.objects.filter(is_selected=True).order_by('-created_date').last()
        non_selected_news.is_selected = False
        non_selected_news.save()

    

    




    

