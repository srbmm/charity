from django.db import models

# Create your models here.



class Supporter(models.Model):

    

    categories = models.ManyToManyField('Category')
    full_name = models.CharField(max_length=255)
    avatar = models.ImageField(blank=True,upload_to='supporters/')
    biography = models.CharField(max_length=70)
    description = models.TextField()
    created_date = models.DateTimeField('created date',auto_now_add=True)


    class Meta:
        db_table = 'Supporter'
        verbose_name = 'Supporter'
        verbose_name_plural = 'Supporter'

    
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



    

