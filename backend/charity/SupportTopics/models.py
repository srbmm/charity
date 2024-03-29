from django.db import models


class SupportTopics(models.Model):
    TOPICS_CHOICES = [
        ('studentSupport','حمایت از دانشجویان'),
        ('sports','ورزشی'),
        ('cultural','فرهنگی'),
        ('research','پژوهشی'),
        ('educational','آموزشی'),
        ('constructional','عمرانی'),
    ]

    topic = models.CharField(max_length=20,choices=TOPICS_CHOICES,verbose_name='موضوع')
    title = models.CharField(max_length=50,verbose_name='عنوان')
    avatar = models.ImageField(blank=True,upload_to='SupportTopics/',verbose_name='تصویر')
    budget = models.CharField(max_length=50,verbose_name='بودجه')
    description = models.TextField(verbose_name='توضیحات')
    progress = models.SmallIntegerField(verbose_name='درصد پیشرفت')

    class Meta:
        db_table = 'SupportTopics'
        verbose_name = 'پروژه'
        verbose_name_plural = 'موضوعات برای حمایت'

    def save(self,*args,**kwargs):
        if self.progress > 100 or self.progress < 0:
            return
        super().save(*args, **kwargs)

    def __str__(self):
        return f'{self.title}    {self.topic}: موضوع'