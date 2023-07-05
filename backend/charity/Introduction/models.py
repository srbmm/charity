from typing import Iterable, Optional
from django.db import models

# Create your models here.

class SingletonModelManager(models.Manager):
    def create(self, **kwargs):
        
        if self.model.objects.exists():
            return self.model.objects.get()
        return super().create(**kwargs)

    
    




class Vision(models.Model):
    title = models.CharField(max_length=50,verbose_name='عنوان')
    avatar = models.ImageField(blank=True,upload_to='Introduction/',verbose_name='تصویر')
    text = models.TextField(verbose_name='متن')
    last_update = models.DateTimeField(verbose_name='آخرین بروزرسانی',auto_now=True)

    class Meta:
        db_table = 'Vision'
        verbose_name = 'چشم انداز'
        verbose_name_plural = 'چشم انداز'

    objects = SingletonModelManager()

    def save(self, *args, **kwargs):
        if Vision.objects.exists() and not self.pk:
            self.pk = 1
        super().save(*args, **kwargs)
    

    def delete(self, *args, **kwargs):
        # Prevent deletion of the only instance
        pass
    
    def __str__(self):
        return f'{self.title}'
    


class History(models.Model):
    title = models.CharField(max_length=50,verbose_name='عنوان')
    avatar = models.ImageField(blank=True,upload_to='Introduction/',verbose_name='تصویر')
    text = models.TextField(verbose_name='متن')
    last_update = models.DateTimeField(verbose_name='آخرین بروزرسانی',auto_now=True)

    class Meta:
        db_table = 'History'
        verbose_name = 'تاریخچه'
        verbose_name_plural = 'تاریخچه'

    
    objects = SingletonModelManager()

    def save(self, *args, **kwargs):
        if Vision.objects.exists() and not self.pk:
            self.pk = 1
        super().save(*args, **kwargs)
    

    def delete(self, *args, **kwargs):
        # Prevent deletion of the only instance
        pass

    def __str__(self):
        return f'{self.title}'
    




class Mission(models.Model):
    title = models.CharField(max_length=50,verbose_name='عنوان')
    avatar = models.ImageField(blank=True,upload_to='Introduction/',verbose_name='تصویر')
    text = models.TextField(verbose_name='متن')
    last_update = models.DateTimeField(verbose_name='آخرین بروزرسانی',auto_now=True)



    class Meta:
        db_table = 'Mission'
        verbose_name = 'مأموریت'
        verbose_name_plural = 'مأموریت ها'
    
    objects = SingletonModelManager()

    def save(self, *args, **kwargs):
        if Vision.objects.exists() and not self.pk:
            self.pk = 1
        super().save(*args, **kwargs)
    

    def delete(self, *args, **kwargs):
        # Prevent deletion of the only instance
        pass


    def __str__(self):
        return f'{self.title}'
    




class Chart(models.Model):
    title = models.CharField(max_length=50,verbose_name='عنوان')
    file = models.FileField(upload_to='Introduction/',verbose_name='فایل')
    last_update = models.DateTimeField(verbose_name='آخرین بروزرسانی',auto_now=True)

    class Meta:
        db_table = 'Chart'
        verbose_name = 'چارت سازمانی'
        verbose_name_plural = 'چارت سازمانی'
    
    objects = SingletonModelManager()

    def save(self, *args, **kwargs):
        if Chart.objects.exists() and not self.pk:
            self.pk = 1
        super().save(*args, **kwargs)
    

    def delete(self, *args, **kwargs):
        # Prevent deletion of the only instance
        pass

    

    



class Statute(models.Model):
    title = models.CharField(max_length=50,verbose_name='عنوان')
    text = models.TextField(verbose_name='متن')
    file = models.FileField(upload_to='Introduction/',verbose_name='فایل')
    last_update = models.DateTimeField(verbose_name='آخرین بروزرسانی',auto_now=True)

    class Meta:
        db_table = 'Statute'
        verbose_name = 'اساسنامه'
        verbose_name_plural = 'اساسنامه'


    objects = SingletonModelManager()

    def save(self, *args, **kwargs):
        if Statute.objects.exists() and not self.pk:
            self.pk = 1
        super().save(*args, **kwargs)
    

    def delete(self, *args, **kwargs):
        # Prevent deletion of the only instance
        pass

    def __str__(self):
        return f'{self.title}'
    



class Values(models.Model):
    title = models.CharField(max_length=50,verbose_name='عنوان')
    text = models.TextField(verbose_name='متن')
    last_update = models.DateTimeField(verbose_name='آخرین بروزرسانی',auto_now=True)

    class Meta:
        db_table = 'Values'
        verbose_name = 'ارزش ها'
        verbose_name_plural = 'ارزش ها'


    objects = SingletonModelManager()

    def save(self, *args, **kwargs):
        if Values.objects.exists() and not self.pk:
            self.pk = 1
        super().save(*args, **kwargs)
    

    def delete(self, *args, **kwargs):
        # Prevent deletion of the only instance
        pass


    def __str__(self):
        return f'{self.title}'
    



class Permissions(models.Model):
    title = models.CharField(max_length=50,verbose_name='عنوان')
    file = models.FileField(upload_to='Introduction/',verbose_name='فایل')
    last_update = models.DateTimeField(verbose_name='آخرین بروزرسانی',auto_now=True)


    class Meta:
        db_table = 'Permissions'
        verbose_name = 'مجوز'
        verbose_name_plural = 'مجوز ها'

    def __str__(self):
        return f'{self.title}'
    




class Financial(models.Model):
    title = models.CharField(max_length=50,verbose_name='عنوان')
    file = models.FileField(upload_to='Introduction/',verbose_name='فایل')
    last_update = models.DateTimeField(verbose_name='آخرین بروزرسانی',auto_now=True)


    class Meta:
        db_table = 'Financial'
        verbose_name = 'صورت حساب مالی'
        verbose_name_plural = 'صورت حساب مالی'

    # if it needs to be one
    objects = SingletonModelManager()

    def save(self, *args, **kwargs):
        if Financial.objects.exists() and not self.pk:
            self.pk = 1
        super().save(*args, **kwargs)
    

    def delete(self, *args, **kwargs):
        # Prevent deletion of the only instance
        pass
    
    def __str__(self):
        return f'{self.title}'
    



class Audit(models.Model):

    YEAR_CHOICES = [
        ('1394','سال ۱۳۹۴'),
        ('1395','سال ۱۳۹۵'),
        ('1396','سال ۱۳۹۶'),
        ('1397','سال ۱۳۹۷'),
        ('1398','سال ۱۳۹۸'),
        ('1399','سال ۱۳۹۹'),
        ('1400','سال ۱۴۰۰'),
        ('1401','سال ۱۴۰۱'),
        ('1402','سال ۱۴۰۲'),
        ('1403','سال ۱۴۰۳'),
        ('1404','سال ۱۴۰۴'),
        ('1405','سال ۱۴۰۵'),
        ('1406','سال ۱۴۰۶'),
        ('1407','سال ۱۴۰۷'),
        ('1408','سال ۱۴۰۸'),
        ('1409','سال ۱۴۰۹'),
        ('1410','سال ۱۴۱۰'),
        ('1411','سال ۱۴۱۱'),
        ('1412','سال ۱۴۱۲'),
        ('1413','سال ۱۴۱۳'),
        ('1414','سال ۱۴۱۴'),
        ('1415','سال ۱۴۱۵')
    ]

    year = models.CharField(max_length=20,choices= YEAR_CHOICES,verbose_name='سال گزارش')
    file = models.FileField(upload_to='Introduction/',verbose_name='فایل')
    last_update = models.DateTimeField(auto_now=True,verbose_name='آخرین بروزرسانی')


    @property
    def title(self):
        return f'{self.year} گزارش حسابرسی در سال'
    

    def save(self, *args, **kwargs):
        temp = Audit.objects.filter(year = self.year)
        if temp:
            return
        super().save(*args, **kwargs)

            

    class Meta:
        db_table = 'Audit'
        verbose_name = 'گزارش حسابرسی'
        verbose_name_plural = 'گزارش حسابرسی'

    def __str__(self):
        return f'{self.year} گزارش حسابرسی سال'



class Performance(models.Model):


    YEAR_CHOICES = [
        ('1394','سال ۱۳۹۴'),
        ('1395','سال ۱۳۹۵'),
        ('1396','سال ۱۳۹۶'),
        ('1397','سال ۱۳۹۷'),
        ('1398','سال ۱۳۹۸'),
        ('1399','سال ۱۳۹۹'),
        ('1400','سال ۱۴۰۰'),
        ('1401','سال ۱۴۰۱'),
        ('1402','سال ۱۴۰۲'),
        ('1403','سال ۱۴۰۳'),
        ('1404','سال ۱۴۰۴'),
        ('1405','سال ۱۴۰۵'),
        ('1406','سال ۱۴۰۶'),
        ('1407','سال ۱۴۰۷'),
        ('1408','سال ۱۴۰۸'),
        ('1409','سال ۱۴۰۹'),
        ('1410','سال ۱۴۱۰'),
        ('1411','سال ۱۴۱۱'),
        ('1412','سال ۱۴۱۲'),
        ('1413','سال ۱۴۱۳'),
        ('1414','سال ۱۴۱۴'),
        ('1415','سال ۱۴۱۵')
    ]

    year = models.CharField(max_length=20,choices= YEAR_CHOICES,verbose_name='سال گزارش')
    file = models.FileField(upload_to='Introduction/',verbose_name='فایل')
    last_update = models.DateTimeField(auto_now=True,verbose_name='آخرین بروزرسانی')


    @property
    def title(self):
        return f'{self.year} گزارش عملکردی در سال'
    

    def save(self, *args, **kwargs):
        temp = Performance.objects.filter(year = self.year)
        if temp:
            return
        super().save(*args, **kwargs)

    def __str__(self):
        return f'{self.year} گزارش عملکردی سال'


    class Meta:
        db_table = 'Performance'
        verbose_name = 'گزارش عملکردی'
        verbose_name_plural = 'گزارش عملکردی'


    



class Faq(models.Model):
    question = models.TextField(verbose_name='سوال')
    answer = models.TextField(verbose_name='پاسخ ')
    last_update = models.DateTimeField(verbose_name='آخرین بروزرسانی',auto_now=True)



    class Meta:
        db_table = 'Faq'
        verbose_name = 'سوال متداول'
        verbose_name_plural = 'سوالات متداول'


    def __str__(self) -> str:
        return f'{self.last_update} آخرین بروزرسانی سوال'


class Partners(models.Model):

    CATEGORY_CHOICES = [
        ('Information Technology','فناوری اطلاعات'),
        ('Accountants','حسابدار'),
        ('auditor','حسابرس'),
        ('Financial','مالی'),
        ('Communication','ارتباط با دانشجویان')
    ]

    full_name = models.CharField(max_length=255,verbose_name='نام و نام خانوادگی')
    avatar = models.ImageField(blank=True,upload_to='Introduction/',verbose_name='تصویر')
    post = models.CharField(max_length=30,verbose_name='مقام')
    biography = models.CharField(max_length=255,verbose_name='بیوگرافی')
    phone_number = models.BigIntegerField(verbose_name='شماره تماس')
    email = models.EmailField(blank=True,null=True,verbose_name='ایمیل')
    category = models.CharField(max_length=30 , choices= CATEGORY_CHOICES,verbose_name='دسته بندی')
    created_date = models.DateTimeField(auto_now_add=True,verbose_name='تاریخ ساخت')




    class Meta:
        db_table = 'Partners'
        verbose_name = 'همکار'
        verbose_name_plural = 'همکاران'



    def __str__(self):
        return f'{self.full_name}'
    




