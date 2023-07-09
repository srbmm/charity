from django.db import models

# Create your models here.



class Project(models.Model):

    STATE_CHOICES = [

        ('possible','قابل انجام'),
        ('done','انجام شده'),
        ('doing','در حال انجام'),

    ]

    TOPICS_CHOICES = [

        ('studentSupport','حمایت از دانشجویان'),
        ('sports','ورزشی'),
        ('cultural','فرهنگی'),
        ('research','پژوهشی'),
        ('educational','آموزشی'),
        ('constructional','عمرانی'),

    ]


    

    topic = models.CharField(max_length=20,choices=TOPICS_CHOICES,verbose_name='موضوع')
    title = models.CharField(max_length=50,verbose_name='عنوان')
    avatar = models.ImageField(blank=True,upload_to='projects/',verbose_name='تصویر')
    budget = models.CharField(max_length=50,verbose_name='بودجه')
    description = models.TextField(verbose_name='توضیحات')
    state = models.CharField(max_length=20,choices=STATE_CHOICES,verbose_name='حالت')



    class Meta:
        db_table = 'Project'
        verbose_name = 'پروژه'
        verbose_name_plural = 'پروژه ها'


    def __str__(self) -> str:
        return f'{self.title}'
    
