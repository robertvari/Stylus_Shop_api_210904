from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny

from .models import Category, SiteInfo


class SiteInfoView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        result = SiteInfo.objects.all()
        if result:
            return Response({
                "name": result[0].site_title,
                "phone": result[0].phone,
                "address": result[0].address
            })

        return Response({})


class CategoriesView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        categories = Category.objects.all()

        result = []

        site_url = request.build_absolute_uri("/")[:-1]

        def get_subcategories(current_category):
            result = [i.title for i in current_category.subcategory.all()]
            if result:
                return result

            return None

        for category in categories:
            result.append(
                {
                    "id": category.id,
                    "title": category.title,
                    "image": f"{site_url}{category.image.url}",
                    "items": get_subcategories(category)
                }
            )

        return Response(result)