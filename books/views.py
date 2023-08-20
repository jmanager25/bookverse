from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Book
from .serializers import BookSerializer
from django.http import Http404

class BookList(APIView):
    """
    Retrieves the book's list
    """
    def get(self, request):
        books = Book.objects.all()
        serializer = BookSerializer(books, many=True)
        return Response(serializer.data)

class BookDetail(APIView):
    """
    Retrieves, updates and deletes books. Also manages
    permissions.
    """
    def get_book(self, pk):
        try:
            book = Book.objects.get(pk=pk)
            return book
        except Book.DoesNotExist:
            raise Http404
    
    def get(self, request, pk):
        book = self.get_book(pk)
        serializer = BookSerializer(book)
        return Response(serializer.data)