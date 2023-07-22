



برای درخواست های نقدی و غیر نقدی ۲ مسیر مشخص شده است که به سرور اطلاعات مورد نیاز را ارسال می‌کند 


    path('cash/')
    path('non-cash/')


برای حمایت نقدی به فایل 
cash.json 
مراجعه کنید 

توجه داشته باشید که موضوع و صندوق حمایت باید بین گزینه های زیر باشند 



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




براي حمايت هاي غير نقدي به فايل 
nonCash.json 
مراجعه كنيد 



توجه داشته باشيد كه موضوع و نوع حمايت بايد بين گزينه هاي زير باشد 

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


