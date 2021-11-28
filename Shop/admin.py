from django.contrib import admin

from .models import Category, SubCategory, ShopItem, Order, OrderItems, SiteInfo


class ShopItemAdmin(admin.ModelAdmin):
    list_display = ["title", "in_stock", "price", "featured"]
    list_editable = ["in_stock", "price", "featured"]


class OrderAdmin(admin.ModelAdmin):
    list_display = ["email", "user", "phone"]


class OrderItemAdmin(admin.ModelAdmin):
    list_display = ["item", "quantity"]


admin.site.register(SiteInfo)
admin.site.register(Category)
admin.site.register(SubCategory)
admin.site.register(ShopItem, ShopItemAdmin)
admin.site.register(Order, OrderAdmin)
admin.site.register(OrderItems, OrderItemAdmin)