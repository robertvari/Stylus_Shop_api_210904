from django.db import models
from django.utils.text import slugify


def get_category_dir_path(instance, filename):
    return f"shop/categories/{slugify(instance.title)}/{filename}"


def image_dir_path(instance, filename):
    if instance.subcategory:
        return f"shop/{slugify(instance.category.title)}/{slugify(instance.subcategory.title)}/{slugify(instance.title)}/{filename}"
    else:
        return f"shop/{slugify(instance.category.title)}/{slugify(instance.title)}/{filename}"


class Category(models.Model):
    title = models.CharField(max_length=200)
    image = models.ImageField(upload_to=get_category_dir_path)

    def __str__(self):
        return self.title