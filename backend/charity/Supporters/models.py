from django.db import models

# Create your models here.



class Supporter(models.Model):

    

    categories = models.ManyToManyField('Category',verbose_name='دسته بندی ها')
    full_name = models.CharField(max_length=255,verbose_name='نام و نام خانوادگی')
    avatar = models.ImageField(blank=True,upload_to='supporters/',verbose_name='تصویر')
    biography = models.CharField(max_length=70,verbose_name='بیوگرافی')
    description = models.TextField(verbose_name='توضیحات')
    created_date = models.DateTimeField(auto_now_add=True,verbose_name='تاریخ ساخت')


    class Meta:
        db_table = 'Supporter'
        verbose_name = 'حامی'
        verbose_name_plural = 'حامیان'

    
    def __str__(self) -> str:
        return f'{self.full_name}'

     



class Category(models.Model):
    title = models.CharField(max_length=30)
    name = models.CharField(max_length=50)

    class Meta:
        db_table = 'Category'
        verbose_name = 'Category'
        verbose_name_plural = 'Categories'

    
    def __str__(self):
        return self.name



    

