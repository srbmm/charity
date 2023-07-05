from django.db import models

# Create your models here.




class PreviousBoard(models.Model):
    full_name = models.CharField(max_length=255,unique=True,verbose_name='نام و  نام خانوادگی')
    avatar = models.ImageField(blank=True,upload_to='Members/',verbose_name='تصویر')
    biography = models.CharField(max_length=50,verbose_name='بیوگرافی')
    created_date = models.DateTimeField(auto_now_add=True,verbose_name='تاریخ ساخت ')


    class Meta:
        db_table = 'PreviousBoard'
        verbose_name = 'هیئت مدیره قبلی'
        verbose_name_plural = 'اعضای هیئت مدیره قبلی' 

    def __str__(self):
        return f'{self.full_name}'
    
    


class CurrentBoard(models.Model):
    full_name = models.CharField(max_length=255,unique=True,verbose_name='نام و  نام خانوادگی')
    avatar = models.ImageField(blank=True,upload_to='Members/',verbose_name='تصویر')
    biography = models.CharField(max_length=50,verbose_name='بیوگرافی')
    created_date = models.DateTimeField(auto_now_add=True,verbose_name='تاریخ ساخت ')

    class Meta:
        db_table = 'CurrentBoard'
        verbose_name = 'هیئت مدیره فعلی'
        verbose_name_plural = 'اعضای هیئت مدیره فعلی'


    def __str__(self):
        return f'{self.full_name}'




class Founders(models.Model):
    full_name = models.CharField(max_length=255,unique=True,verbose_name='نام و  نام خانوادگی')
    avatar = models.ImageField(blank=True,upload_to='Members/',verbose_name='تصویر')
    biography = models.CharField(max_length=50,verbose_name='بیوگرافی')
    created_date = models.DateTimeField(auto_now_add=True,verbose_name='تاریخ ساخت ')


    class Meta:
        db_table = 'Founders'
        verbose_name = 'عضو هیئت موسسان'
        verbose_name_plural = 'اعضای هیئت موسسان'

    def __str__(self):
        return f'{self.full_name}'





class Trustees(models.Model):
    full_name = models.CharField(max_length=255,unique=True,verbose_name='نام و  نام خانوادگی')
    avatar = models.ImageField(blank=True,upload_to='Members/',verbose_name='تصویر')
    biography = models.CharField(max_length=50,verbose_name='بیوگرافی')
    created_date = models.DateTimeField(auto_now_add=True,verbose_name='تاریخ ساخت ')


    class Meta:
        db_table = 'Trustees'
        verbose_name = 'عضو هیئت امنا'
        verbose_name_plural = 'اعضای هیئت امنا'


    def __str__(self):
        return f'{self.full_name}'




class Inspectors(models.Model):
    full_name = models.CharField(max_length=255,unique=True,verbose_name='نام و  نام خانوادگی')
    avatar = models.ImageField(blank=True,upload_to='Members/',verbose_name='تصویر')
    biography = models.CharField(max_length=50,verbose_name='بیوگرافی')
    created_date = models.DateTimeField(auto_now_add=True,verbose_name='تاریخ ساخت ')


    class Meta:
        db_table = 'Inspectors'
        verbose_name = 'بازرس'
        verbose_name_plural = 'بازرسان'

    def __str__(self):
        return f'{self.full_name}'
    





class Members(models.Model):
    full_name = models.CharField(max_length=255,unique=True,verbose_name='نام و  نام خانوادگی')
    avatar = models.ImageField(blank=True,upload_to='Members/',verbose_name='تصویر')
    biography = models.CharField(max_length=50,verbose_name='بیوگرافی')
    created_date = models.DateTimeField(auto_now_add=True,verbose_name='تاریخ ساخت ')

    class Meta:
        db_table = 'Members'
        verbose_name = 'عضو مجتمع عمومی'
        verbose_name_plural = 'اعضای مجتمع عمومی'



    def __str__(self):
        return f'{self.full_name}'