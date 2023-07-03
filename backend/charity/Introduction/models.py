from typing import Iterable, Optional
from django.db import models

# Create your models here.

class SingletonModelManager(models.Manager):
    def create(self, **kwargs):
        
        if self.model.objects.exists():
            return self.model.objects.get()
        return super().create(**kwargs)

    
    




class Vision(models.Model):
    title = models.CharField(max_length=50)
    avatar = models.ImageField(blank=True,upload_to='Introduction/')
    text = models.TextField()
    last_update = models.DateTimeField('last update',auto_now=True)

    class Meta:
        db_table = 'Vision'
        verbose_name = 'Vision'
        verbose_name_plural = 'Vision'

    objects = SingletonModelManager()

    def save(self, *args, **kwargs):
        if Vision.objects.exists() and not self.pk:
            self.pk = 1
        super().save(*args, **kwargs)
    

    def delete(self, *args, **kwargs):
        # Prevent deletion of the only instance
        pass
    

class History(models.Model):
    title = models.CharField(max_length=50)
    avatar = models.ImageField(blank=True,upload_to='Introduction/')
    text = models.TextField()
    last_update = models.DateTimeField('last update',auto_now=True)


    class Meta:
        db_table = 'History'
        verbose_name = 'History'
        verbose_name_plural = 'History'

    
    objects = SingletonModelManager()

    def save(self, *args, **kwargs):
        if Vision.objects.exists() and not self.pk:
            self.pk = 1
        super().save(*args, **kwargs)
    

    def delete(self, *args, **kwargs):
        # Prevent deletion of the only instance
        pass


class Mission(models.Model):
    title = models.CharField(max_length=20)
    text = models.TextField()
    avatar = models.ImageField(blank=True,upload_to='Introduction/')
    last_update = models.DateTimeField('last update',auto_now=True)



    class Meta:
        db_table = 'Mission'
        verbose_name = 'Mission'
        verbose_name_plural = 'Mission'
    
    objects = SingletonModelManager()

    def save(self, *args, **kwargs):
        if Vision.objects.exists() and not self.pk:
            self.pk = 1
        super().save(*args, **kwargs)
    

    def delete(self, *args, **kwargs):
        # Prevent deletion of the only instance
        pass




class Chart(models.Model):
    title = models.CharField(max_length=50,default='Chart')
    file = models.FileField(upload_to='Introduction/')
    last_update = models.DateTimeField('last update',auto_now=True)

    class Meta:
        db_table = 'Chart'
        verbose_name = 'Chart'
        verbose_name_plural = 'Chart'
    
    objects = SingletonModelManager()

    def save(self, *args, **kwargs):
        if Chart.objects.exists() and not self.pk:
            self.pk = 1
        super().save(*args, **kwargs)
    

    def delete(self, *args, **kwargs):
        # Prevent deletion of the only instance
        pass


class Statute(models.Model):
    title = models.CharField(max_length=50)
    text = models.TextField()
    file = models.FileField(upload_to='Introduction/')
    last_update = models.DateTimeField('last update',auto_now=True)

    class Meta:
        db_table = 'Statute'
        verbose_name = 'Statute'
        verbose_name_plural = 'Statute'


    objects = SingletonModelManager()

    def save(self, *args, **kwargs):
        if Statute.objects.exists() and not self.pk:
            self.pk = 1
        super().save(*args, **kwargs)
    

    def delete(self, *args, **kwargs):
        # Prevent deletion of the only instance
        pass



class Values(models.Model):
    title = models.CharField(max_length=50)
    text = models.TextField()
    last_update = models.DateTimeField('last update',auto_now=True)

    class Meta:
        db_table = 'Values'
        verbose_name = 'Values'
        verbose_name_plural = 'Values'


    objects = SingletonModelManager()

    def save(self, *args, **kwargs):
        if Values.objects.exists() and not self.pk:
            self.pk = 1
        super().save(*args, **kwargs)
    

    def delete(self, *args, **kwargs):
        # Prevent deletion of the only instance
        pass



class Permissions(models.Model):
    title = models.CharField(max_length=50)
    file = models.FileField(upload_to='Introduction/')
    last_update = models.DateTimeField('last update',auto_now=True)


    class Meta:
        db_table = 'Permissions'
        verbose_name = 'Permissions'
        verbose_name_plural = 'Permissions'




class Financial(models.Model):
    title = models.CharField(max_length=50,default='financial')
    file = models.FileField(upload_to='Introduction/')
    last_update = models.DateTimeField('last update',auto_now=True)


    class Meta:
        db_table = 'Financial'
        verbose_name = 'Financial'
        verbose_name_plural = 'Financial'

    # if it needs to be one
    objects = SingletonModelManager()

    def save(self, *args, **kwargs):
        if Financial.objects.exists() and not self.pk:
            self.pk = 1
        super().save(*args, **kwargs)
    

    def delete(self, *args, **kwargs):
        # Prevent deletion of the only instance
        pass
    


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
    ]

    year = models.CharField(max_length=20,choices= YEAR_CHOICES)
    file = models.FileField(upload_to='Introduction/')
    last_update = models.DateTimeField('last update',auto_now=True)


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
        verbose_name = 'Audit'
        verbose_name_plural = 'Audit'



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
    ]

    year = models.CharField(max_length=20,choices= YEAR_CHOICES)
    file = models.FileField(upload_to='Introduction/')
    last_update = models.DateTimeField('last update',auto_now=True)


    @property
    def title(self):
        return f'{self.year} گزارش عملکردی در سال'
    

    def save(self, *args, **kwargs):
        temp = Performance.objects.filter(year = self.year)
        if temp:
            return
        super().save(*args, **kwargs)


    class Meta:
        db_table = 'Performance'
        verbose_name = 'Performance'
        verbose_name_plural = 'Performance'


    



class Faq(models.Model):
    question = models.TextField()
    answer = models.TextField()
    last_update = models.DateTimeField('last update',auto_now=True)
    phone_number = models.BigIntegerField()
    email = models.EmailField()


    class Meta:
        db_table = 'Faq'
        verbose_name = 'Faq'
        verbose_name_plural = 'Faq'





class Partners(models.Model):

    CATEGORY_CHOICES = [
        ('Information Technology','فناوری اطلاعات'),
        ('Accountants','حسابدار'),
        ('auditor','حسابرس'),
        ('Financial','مالی'),
        ('Communication','ارتباط با دانشجویان')
    ]

    full_name = models.CharField(max_length=255)
    avatar = models.ImageField(blank=True,upload_to='Introduction/')
    post = models.CharField(max_length=30)
    biography = models.CharField(max_length=255)
    phone_number = models.BigIntegerField()
    email = models.EmailField(blank=True,null=True)
    category = models.CharField(max_length=30 , choices= CATEGORY_CHOICES)
    created_date = models.DateTimeField('created date',auto_now_add=True)




    class Meta:
        db_table = 'Partners'
        verbose_name = 'Partners'
        verbose_name_plural = 'Partners'








