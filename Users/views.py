from rest_framework.views import APIView
from rest_framework.response import Response


class ProfileView(APIView):
    def get(self, request):
        return Response({"message": "User profile"})

    def patch(self, request):
        return Response({"message": "Update profile"})