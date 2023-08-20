from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import Http404
from rest_framework import status
from .models import Profile
from .serializers import ProfileSerializer


class ProfileList(APIView):
    """
    Retrieves a list of all profiles.
    """
    def get(self, request):
        profiles = Profile.objects.all()
        serializer = ProfileSerializer(profiles, many=True)
        return Response(serializer.data)


class ProfileDetail(APIView):
    """
    Retrieves, updates and deletes a profile.
    """
    serializer_class = ProfileSerializer
    def get_profile(self, pk):
        try:
            return Profile.objects.get(pk=pk)
        except Profile.DoesNotExist:
            raise Http404

    def get(self, request, pk):
        Profile = self.get_profile(pk)
        serializer = ProfileSerializer(Profile)
        return Response(serializer.data)

    def put(self, request, pk):
        profile = self.get_profile(pk)
        serializer = ProfileSerializer(profile, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    