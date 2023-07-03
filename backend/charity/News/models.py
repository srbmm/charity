from django.db import models




class News(models.Model):
    title = models.CharField(max_length=50)
    avatar = models.ImageField(blank=True,upload_to='News/')
    text = models.TextField(blank=True)
    created_date = models.DateTimeField('created date',auto_now_add=True)
    summary = models.TextField(blank=True)
    seen_count = models.IntegerField(default=0)
    is_selected = models.BooleanField(default=False)



    class Meta:
        db_table = 'News'
        verbose_name = 'News'
        verbose_name_plural = 'News' 
