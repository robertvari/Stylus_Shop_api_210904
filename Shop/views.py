from rest_framework.views import APIView
from rest_framework.response import Response


class SiteInfo(APIView):
    def get(self, request):
        result = {
            "name": "Stylus Shop",
            "phone": "06 20 555 6677",
            "address": "1027 Budapest Széna tér 1."
        }

        return Response(result)


class CategoriesView(APIView):
    def get(self, request):
        result = [
        {"id": 0, "title": "Cameras", "image":"https://cdn.shopify.com/s/files/1/0543/1637/collections/camera_125x.jpg?v=1480360378", "items": ["Leica M", "Leica SL", "Leica S", "Analog", "Leica Q", "Leica Sofort System", "Compact", "Leica T", "Leica X"]},
        {"id": 1, "title": "Cases", "image":"https://cdn.shopify.com/s/files/1/0543/1637/collections/case_180x.jpg?v=1480360270", "items": ["Shoulder Bags", "Backpacks", "Small Cases and Inserts", "Half Cases", "Straps"]},
        {"id": 2, "title": "Video", "image":"https://cdn.shopify.com/s/files/1/0543/1637/products/PIX-E7-Hood-0965_125x.jpg?v=1484780864", "items": None},
        {"id": 3, "title": "Accessories", "image":"https://cdn.shopify.com/s/files/1/0543/1637/collections/accessories_125x.jpg?v=1480360306", "items": None},
        {"id": 4, "title": "Sport Optics", "image":"https://cdn.shopify.com/s/files/1/0543/1637/products/Colorline_8x20_pigeon_blue-1_125x.jpg?v=1484757635", "items": None},
        {"id": 5, "title": "Lifestyle", "image":"https://cdn.shopify.com/s/files/1/0543/1637/products/TBPhotography-7845-1_6815f5e5-f432-415a-82ac-de6546f16f38_125x.jpg?v=1484756182", "items": None}
      ]

        return Response(result)