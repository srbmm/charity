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




