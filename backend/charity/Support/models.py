from django.db import models

# Create your models here.




class SupportReceipt(models.Model):

    TOPICS_CHOICES = [

        ('studentSupport','حمایت از دانشجویان'),
        ('sports','ورزشی'),
        ('cultural','فرهنگی'),
        ('research','پژوهشی'),
        ('educational','آموزشی'),
        ('constructional','عمرانی'),

    ]


    SUPPORT_FUND_CHOICES = [

        ('agriculture','دانشکده کشاورزی'),
        ('technical','دانشکده فنی مهندسی و علوم کاربردی'),
        ('social','فعالیت های اجتماعی و فوق برنامه'),

    ]

    topic = models.CharField(max_length=20,choices=TOPICS_CHOICES,verbose_name='موضوع')
    support_fund = models.CharField(max_length=70,choices=SUPPORT_FUND_CHOICES,verbose_name='صندوق حمایت')
    full_name = models.CharField(max_length=255,verbose_name='نام و نام خانوادگی')
    email = models.EmailField(verbose_name='ایمیل')
    phone_number = models.BigIntegerField(verbose_name='تلفن همراه')
    amount = models.BigIntegerField(verbose_name='میزان حمایت')
    support_date = models.DateField(verbose_name='تاریخ حمایت',auto_now_add=True)

    



    class Meta:
        db_table = 'Support'
        verbose_name = 'حمایت'
        verbose_name_plural = 'صندوق حمایت ها'


    def __str__(self):
        return f' {self.full_name}         {self.amount}'
    




