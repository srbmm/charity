from typing import Iterable, Optional
from django.db import models


class Supporter(models.Model):
    #categories = models.ManyToManyField('Category',verbose_name='دسته بندی ها')
    full_name = models.CharField(max_length=255,verbose_name='نام و نام خانوادگی')
    avatar = models.ImageField(blank=True,upload_to='supporters/',verbose_name='تصویر')
    biography = models.CharField(max_length=100,blank=True,verbose_name='بیوگرافی')
    description = models.TextField(blank=True,verbose_name='توضیحات')
    created_date = models.DateTimeField(auto_now_add=True,verbose_name='تاریخ ساخت')
    is_special = models.BooleanField(default=False,verbose_name='حامی صفحه اصلی')

    class Meta:
        db_table = 'Supporter'
        verbose_name = 'حامی'
        verbose_name_plural = 'حامیان'
    
    def save(self, *args, **kwargs):
        super().save(args,kwargs)
        if Supporter.objects.filter(is_special = True).count() > 3:
            self.is_special = False
        super().save(args,kwargs)



class Category(models.Model):
    title = models.CharField(max_length=30)
    name = models.CharField(max_length=50)

    class Meta:
        db_table = 'Category'
        verbose_name = 'Category'
        verbose_name_plural = 'Categories'
    
    def __str__(self):
        return self.name
