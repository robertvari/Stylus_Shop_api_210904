from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from .models import StylusUser


class StylusUserAdmin(UserAdmin):
    model = StylusUser
    list_display = ["email"]

    fieldsets = (
        ("Login", {"fields": ("email", "username", "password")}),
        ("Permissions", {"fields": ("is_staff", "is_active", "last_login")})
    )