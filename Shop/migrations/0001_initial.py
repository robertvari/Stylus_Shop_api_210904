# Generated by Django 3.2.9 on 2021-11-27 17:09

import Shop.models
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('image', models.ImageField(upload_to=Shop.models.get_category_dir_path)),
            ],
        ),
        migrations.CreateModel(
            name='SubCategory',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='subcategory', to='Shop.category')),
            ],
        ),
        migrations.CreateModel(
            name='ShopItem',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('slug', models.SlugField(blank=True, max_length=200)),
                ('in_stock', models.IntegerField(default=1)),
                ('featured', models.BooleanField(default=False)),
                ('title', models.CharField(max_length=200)),
                ('price', models.IntegerField()),
                ('image1', models.ImageField(upload_to=Shop.models.image_dir_path)),
                ('image2', models.ImageField(blank=True, upload_to=Shop.models.image_dir_path)),
                ('image3', models.ImageField(blank=True, upload_to=Shop.models.image_dir_path)),
                ('description', models.TextField(blank=True, max_length=5000)),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='category', to='Shop.category')),
                ('subcategory', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='subcategory', to='Shop.subcategory')),
            ],
        ),
        migrations.CreateModel(
            name='OrderItems',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('quantity', models.IntegerField(default=1)),
                ('item', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='orders', to='Shop.shopitem')),
            ],
        ),
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.EmailField(max_length=200)),
                ('first_name', models.CharField(max_length=200)),
                ('last_name', models.CharField(max_length=200)),
                ('company', models.CharField(blank=True, max_length=200)),
                ('address', models.CharField(max_length=200)),
                ('apartment', models.CharField(blank=True, max_length=200)),
                ('city', models.CharField(max_length=200)),
                ('post_code', models.CharField(max_length=200)),
                ('phone', models.CharField(max_length=200)),
                ('date', models.DateTimeField(auto_now_add=True)),
                ('items', models.ManyToManyField(to='Shop.OrderItems')),
                ('user', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='orders', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
