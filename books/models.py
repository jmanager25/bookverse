from django.db import models
from django.contrib.auth.models import User


class Book(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=50)
    summary = models.TextField()
    author = models.CharField(max_length=50)
    genre = models.CharField(max_length=50)
    cover_image = models.ImageField(upload_to='images/', blank=True)
    average_rating = models.DecimalField(max_digits=3, decimal_places=2, default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return self.title