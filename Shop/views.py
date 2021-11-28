from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny

from .models import Category, SiteInfo, ShopItem


class ShopItemsView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        result = []

        item_list = ShopItem.objects.all()
        site_url = request.build_absolute_uri("/")[:-1]

        for shop_item in item_list:
            result.append({
                "id": shop_item.id,
                "featured": shop_item.featured,
                "slug": shop_item.slug,
                "category": shop_item.category.title,
                "subcategory": shop_item.subcategory.title if shop_item.subcategory else None,
                "title": shop_item.title,
                "price": shop_item.price,
                "image": f"{site_url}{shop_item.image1.url}",
                "description": shop_item.description
            })

        return Response(result)


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