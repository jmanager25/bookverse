from django.db import models
from django.contrib.auth.models import User
from reviews.models import Review

class Like(models.Model):
    """
    Like model
    """
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    review = models.ForeignKey(Review, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']
        unique_together = ['owner', 'review']

    def __str__(self):
        return f"Like by {self.owner} on {self.review}"
