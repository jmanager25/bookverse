from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Book
from .serializers import BookSerializer
from django.http import Http404
from rest_framework import status
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAuthenticatedOrReadOnly
from bookverse_api.permissions import IsOwnerOrReadOnly


class BookList(APIView):
    """
    Retrieves the book's list
    """
    def get(self, request):
        books = Book.objects.all()
        serializer = BookSerializer(
            books, many=True, context={'request': request})
        return Response(serializer.data)

class BookDetail(APIView):
    """
    Retrieves, updates and deletes books. Also manages
    permissions.
    """
    serializer_class = BookSerializer
    permission_classes = [IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly]

    def get_book(self, pk):
        try:
            book = Book.objects.get(pk=pk)
            return book
        except Book.DoesNotExist:
            raise Http404
    
    def get(self, request, pk):
        book = self.get_book(pk)
        serializer = BookSerializer(book, context={'request': request})
        return Response(serializer.data)
    
    def put(self, request, pk):
        book = self.get_book(pk)
        serializer = BookSerializer(
            book, data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, pk):
        book = self.get_book(pk)
        book.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)