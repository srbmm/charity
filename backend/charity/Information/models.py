from django.db import models

# Create your models here.



class Info(models.Model):
    
    title = models.CharField(max_length=50,default='اطلاعات ارتباطی')
    address = models.TextField()

    phone_number1 = models.BigIntegerField(blank=False,null=False)
    phone_number2 = models.BigIntegerField(blank=True,null=True)
    phone_number3 = models.BigIntegerField(blank=True,null=True)
    phone_number4 = models.BigIntegerField(blank=True,null=True)
    phone_number5 = models.BigIntegerField(blank=True,null=True)

    email = models.EmailField()
    
    whatsapp = models.CharField(max_length=30,blank=True,null=True)
    telegram = models.CharField(max_length=40,blank=True,null=True)
    instagram = models.CharField(max_length=50,blank=True,null=True)


    def __str__(self) -> str:
        return 'اطلاعات ارتباطی'



    class Meta:
        db_table = 'Info'
        verbose_name = 'Info'
        verbose_name_plural = 'Info'


    def save(self, *args, **kwargs):
        if Info.objects.exists() and not self.pk:
            self.pk = 1
        super().save(*args, **kwargs)
    

    def delete(self, *args, **kwargs):
        # Prevent deletion of the only instance
        pass




class Links(models.Model):

    title = models.CharField(max_length=100)
    link = models.CharField(max_length=255)


    def __str__(self) -> str:
        return f'{self.title}'
    


    class Meta:
        db_table = 'Links'
        verbose_name = 'Links'
        verbose_name_plural = 'Links'



