from django.db import models


class News(models.Model):
    title = models.CharField(max_length=50,verbose_name='عنوان')
    avatar = models.ImageField(blank=True,upload_to='News/',verbose_name='تصویر خبر')
    text = models.TextField(verbose_name='متن خبر')
    created_date = models.DateTimeField(auto_now_add=True,verbose_name='تاریخ ساخت خبر')
    summary = models.TextField(verbose_name='خلاصه خبر')
    seen_count = models.IntegerField(default=0,verbose_name='تعداد بازدید')
    is_selected = models.BooleanField(default=False,verbose_name='خبر خاص')

    class Meta:
        db_table = 'News'
        verbose_name = 'خبر'
        verbose_name_plural = 'اخبار' 
    
    def save(self, *args, **kwargs):
        super().save(args,kwargs)
        if News.objects.filter(is_selected = True).count() > 6:
            self.is_selected = False
        super().save(args,kwargs)

    def __str__(self):
        return f'{self.title}'
    
