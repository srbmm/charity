from typing import Iterable, Optional
from django.db import models

# Create your models here.




class SupportTopics(models.Model):

    TOPICS_CHOICES = [

        ('studentSupport','حمایت از دانشجویان'),
        ('sports','ورزشی'),
        ('cultural','فرهنگی'),
        ('research','پژوهشی'),
        ('educational','آموزشی'),
        ('constructional','عمرانی'),

    ]

    topic = models.CharField(max_length=20,choices=TOPICS_CHOICES)
    title = models.CharField(max_length=50)
    avatar = models.ImageField(blank=True,upload_to='projects/')
    budget = models.CharField(max_length=50)
    description = models.TextField()
    progress = models.SmallIntegerField()



    def save(self,*args,**kwargs):
        if self.progress > 100 or self.progress < 0:
            return
        super().save(*args, **kwargs)

    class Meta:
        db_table = 'SupportTopics'
        verbose_name = 'SupportTopics'
        verbose_name_plural = 'SupportTopics'

 