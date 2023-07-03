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
    """
    objects = SingletonModelManager()

    def save(self, *args, **kwargs):
        if Financial.objects.exists() and not self.pk:
            self.pk = 1
        super().save(*args, **kwargs)
    

    def delete(self, *args, **kwargs):
        # Prevent deletion of the only instance
        pass
    """


class Audit(models.Model):
    title = models.CharField(max_length=50,default='audit')
    file = models.FileField(upload_to='Introduction/')
    last_update = models.DateTimeField('last update',auto_now=True)


    class Meta:
        db_table = 'Audit'
        verbose_name = 'Audit'
        verbose_name_plural = 'Audit'



class Performance(models.Model):
    title = models.CharField(max_length=50,default='performance')
    file = models.FileField(upload_to='Introduction/')
    last_update = models.DateTimeField('last update',auto_now=True)


    class Meta:
        db_table = 'Performance'
        verbose_name = 'Performance'
        verbose_name_plural = 'Performance'


    
class Faq(models.Model):
    question = models.TextField()
    answer = models.TextField()
    last_update = models.DateTimeField('last update',auto_now=True)


    class Meta:
        db_table = 'Faq'
        verbose_name = 'Faq'
        verbose_name_plural = 'Faq'


