from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny


class SiteInfo(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        return Response({})


class CategoriesView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        return Response([])