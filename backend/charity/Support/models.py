from django.db import models


class NonCashSupport(models.Model):    
    TOPICS_CHOICES = [
        ('studentSupport','حمایت از دانشجویان'),
        ('sports','ورزشی'),
        ('cultural','فرهنگی'),
        ('research','پژوهشی'),
        ('educational','آموزشی'),
        ('constructional','عمرانی'),
    ]

    SUPPORT_TYPE_CHOICES = [
        ('endowment','وقف اموال'),
        ('inheritance','ارث'),
        ('rent','اجاره به شرط تملیک'),
        ('expertise','تخصص'),
    ]

    topic = models.CharField(
            max_length=20,choices=TOPICS_CHOICES,
            verbose_name='محل مصرف',blank=True,null=True,
            default=None
          )
    full_name = models.CharField(max_length=255,verbose_name='نام و نام خانوادگی')
    phone_number =  models.CharField(max_length=20,verbose_name='تلفن همراه')
    support_type = models.CharField(
            max_length=40,choices=SUPPORT_TYPE_CHOICES,
            verbose_name='نوع حمایت',
            blank=True,null=True,default=None  
        )
    description = models.TextField(verbose_name='توضیحات')
    support_date = models.DateField(verbose_name='تاریخ حمایت',auto_now_add=True)
    
    class Meta:
        db_table = 'NonCashSupport'
        verbose_name = 'حمایت غیر نقدی'
        verbose_name_plural = 'حمایت های غیر نقدی'

    def __str__(self):
        return f' {self.full_name} '


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

    topic = models.CharField(
            max_length=20,choices=TOPICS_CHOICES,
            verbose_name='موضوع',blank=True,
            null=True,default=None
        )
    support_fund = models.CharField(
            max_length=70,choices=SUPPORT_FUND_CHOICES,
           verbose_name='صندوق حمایت',blank=True,
           null=True,default=None
        )
    full_name = models.CharField(max_length=255,verbose_name='نام و نام خانوادگی')
    email = models.EmailField(verbose_name='ایمیل',blank=True,null=True)
    phone_number = models.CharField(max_length=20,verbose_name='تلفن همراه')
    amount = models.BigIntegerField(verbose_name='میزان حمایت')
    support_date = models.DateField(verbose_name='تاریخ حمایت',auto_now_add=True)

    class Meta:
        db_table = 'Support'
        verbose_name = 'حمایت'
        verbose_name_plural = 'صندوق حمایت ها'

    def __str__(self):
        return f' {self.full_name}'
    