from django.urls import path

from .views import SiteInfo, CategoriesView

urlpatterns = [
    path("site-info/", SiteInfo.as_view()),
    path("categories/", CategoriesView.as_view()),
]