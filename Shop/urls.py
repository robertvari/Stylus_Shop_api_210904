from django.urls import path

from .views import SiteInfoView, CategoriesView, ShopItemsView

urlpatterns = [
    path("site-info/", SiteInfoView.as_view()),
    path("categories/", CategoriesView.as_view()),
    path("shop-items/", ShopItemsView.as_view()),
]