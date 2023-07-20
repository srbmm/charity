from django.apps import AppConfig


class SupportersConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'Supporters'



    def ready(self) -> None:
        import Supporters.signals
        """
        from . import models

        CATEGORIES_CHOICES = [
            ('relative', 'بستگان دانشجویان'),
            ('faculty', 'هیات علمی'),
            ('organization', 'موسسات'),
            ('graduates', 'فارغ التحصیلان'),
            ('neither','دوستدار'),
        ]
        # for categories 
        try:
            if not models.Category.objects.all():
                for item in CATEGORIES_CHOICES:
                    models.Category.objects.create(name = item[1],title = item[0])
        except:
            pass
            
        """
        
