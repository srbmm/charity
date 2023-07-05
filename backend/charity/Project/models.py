from django.db import models

# Create your models here.



class Project(models.Model):

    STATE_CHOICES = [

        ('possible','قابل انجام'),
        ('done','انجام شده'),
        ('doing','در حال انجام'),

    ]

    title = models.CharField(max_length=50)
    avatar = models.ImageField(blank=True,upload_to='projects/')
    budget = models.CharField(max_length=50)
    description = models.TextField()
    state = models.CharField(max_length=20,choices=STATE_CHOICES)



    class Meta:
        db_table = 'Project'
        verbose_name = 'Project'
        verbose_name_plural = 'Project'