from django.db import models


class Info(models.Model):    
    title = models.CharField(max_length=50,default='اطلاعات ارتباطی')
    address = models.TextField(verbose_name='آدرس')
    phone_number1 = models.BigIntegerField(blank=False,null=False,verbose_name='شماره تماس ۱')
    phone_number2 = models.BigIntegerField(blank=True,null=True,verbose_name='شماره تماس ۲')
    email = models.EmailField(verbose_name='ایمیل')
    whatsapp = models.CharField(max_length=30,blank=True,null=True,verbose_name='واتساپ')
    telegram = models.CharField(max_length=40,blank=True,null=True,verbose_name='تلگرام')
    instagram = models.CharField(max_length=50,blank=True,null=True,verbose_name='اینستاگرام')

    class Meta:
        db_table = 'Info'
        verbose_name = 'راه های ارتباطی'
        verbose_name_plural = 'راه های ارتباطی'

    def __str__(self) -> str:
        return 'اطلاعات ارتباطی'

    def save(self, *args, **kwargs):
        if Info.objects.exists() and not self.pk:
            self.pk = 1
        super().save(*args, **kwargs)
    
    def delete(self, *args, **kwargs):
        pass


class Links(models.Model):
    title = models.CharField(max_length=100,verbose_name='عنوان')
    link = models.CharField(max_length=255,verbose_name='لینک')

    class Meta:
        db_table = 'Links'
        verbose_name = 'لینک'
        verbose_name_plural = 'لینک ها'

    def __str__(self) -> str:
        return f'{self.title}'
    
