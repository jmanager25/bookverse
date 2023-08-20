from django.urls import path
from books import views

urlpatterns = [
    path('books/', views.BookList.as_view(), name='book-list'),
]