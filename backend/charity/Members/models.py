from django.db import models

# Create your models here.




class PreviousBoard(models.Model):
    full_name = models.CharField(max_length=255,unique=True)
    avatar = models.ImageField(blank=True,upload_to='Members/')
    biography = models.CharField(max_length=50)
    created_date = models.DateTimeField('created date',auto_now_add=True)


    class Meta:
        db_table = 'PreviousBoard'
        verbose_name = 'PreviousBoard'
        verbose_name_plural = 'PreviousBoard' 




class CurrentBoard(models.Model):
    full_name = models.CharField(max_length=255,unique=True)
    avatar = models.ImageField(blank=True,upload_to='Members/')
    biography = models.CharField(max_length=50)
    created_date = models.DateTimeField('created date',auto_now_add=True)

    class Meta:
        db_table = 'CurrentBoard'
        verbose_name = 'CurrentBoard'
        verbose_name_plural = 'CurrentBoard'




class Founders(models.Model):
    full_name = models.CharField(max_length=255,unique=True)
    avatar = models.ImageField(blank=True,upload_to='Members/')
    biography = models.CharField(max_length=50)
    created_date = models.DateTimeField('created date',auto_now_add=True)


    class Meta:
        db_table = 'Founders'
        verbose_name = 'Founders'
        verbose_name_plural = 'Founders'




class Trustees(models.Model):
    full_name = models.CharField(max_length=255,unique=True)
    avatar = models.ImageField(blank=True,upload_to='Members/')
    biography = models.CharField(max_length=50)
    created_date = models.DateTimeField('created date',auto_now_add=True)


    class Meta:
        db_table = 'Trustees'
        verbose_name = 'Trustees'
        verbose_name_plural = 'Trustees'




class Inspectors(models.Model):
    full_name = models.CharField(max_length=255,unique=True)
    avatar = models.ImageField(blank=True,upload_to='Members/')
    biography = models.CharField(max_length=50)
    created_date = models.DateTimeField('created date',auto_now_add=True)


    class Meta:
        db_table = 'Inspectors'
        verbose_name = 'Inspectors'
        verbose_name_plural = 'Inspectors'






class Members(models.Model):
    full_name = models.CharField(max_length=255,unique=True)
    avatar = models.ImageField(blank=True,upload_to='Members/')
    biography = models.CharField(max_length=50)
    created_date = models.DateTimeField('created date',auto_now_add=True)


    class Meta:
        db_table = 'Members'
        verbose_name = 'Members'
        verbose_name_plural = 'Members'




