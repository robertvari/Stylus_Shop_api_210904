from django.urls import path

from .views import SiteInfoView, CategoriesView

urlpatterns = [
    path("site-info/", SiteInfoView.as_view()),
    path("categories/", CategoriesView.as_view()),
]