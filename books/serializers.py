from rest_framework import serializers
from .models import Book

class BookSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')
    is_owner = serializers.SerializerMethodField()

    def get_is_owner(self, obj):
        request = self.context['request']
        return request.user == obj.owner

    class Meta:
        model = Book
        fields = [
            'id', 'owner', 'title', 'summary', 'author', 'genre', 'cover_image',
            'average_rating', 'created_at', 'updated_at', 'is_owner'
        ]