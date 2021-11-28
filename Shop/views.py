from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from django.db import transaction

from .models import Category, SiteInfo, ShopItem, OrderItems, Order
from Users.models import StylusUser


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


class OrderView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        payment_id = request.data.get("payment_id")
        amount = request.data.get("amount")

        # todo integrate stripe payment
        payment_intent = {
            "status": "succeeded"
        }

        if payment_intent.get("status") == "succeeded":
            self._save_order()

        return Response("order processed...")

    def _save_order(self):
        # get the shopping list
        shopping_list = self.request.data.get("shopping_list")

        # get customer
        customer = self.request.data.get("customer")

        # create a order item list
        order_items = []
        for item in shopping_list:
            item_id = item["id"]
            quantity = item["quantity"]

            with transaction.atomic():
                shop_item = ShopItem.objects.select_for_update().get(id=item_id)
                shop_item.in_stock -= quantity
                shop_item.save()

            order_item = OrderItems.objects.create(
                item=shop_item,
                quantity=quantity
            )

            order_items.append(order_item)

        user = None
        if customer.get("user_id"):
            user = StylusUser.objects.get(id=customer.get("user_id"))

        # save order
        order = Order.objects.create(
            user=user,
            email=customer.get("email"),
            first_name=customer.get("first_name"),
            last_name=customer.get("last_name"),
            company=customer.get("company"),
            address=customer.get("address"),
            city=customer.get("city"),
            post_code=customer.get("post_code"),
            phone=customer.get("phone")
        )

        order.items.set(order_items)
        order.save()