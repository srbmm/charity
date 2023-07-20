from django.db.models.signals import pre_save
from django.dispatch import receiver
from .models import Supporter


@receiver(pre_save, sender=Supporter)
def limit_selected_supporter(sender, instance, **kwargs):
    special_count = Supporter.objects.filter(is_special = True).count() 
    if special_count >= 3 and instance.is_special:
        non_special_supporters = Supporter.objects.filter(is_special = True).order_by('-created_date').last()
        non_special_supporters.is_special = False
        non_special_supporters.save()


