from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from .models import StylusUser, Profile


class UserProfileInline(admin.StackedInline):
    model = Profile


class StylusUserAdmin(UserAdmin):
    model = StylusUser
    list_display = ["email"]

    fieldsets = (
        ("Belépési adatok", {"fields": ("email", "username", "password")}),
        ("Jogosultságok", {"fields": ("is_staff", "is_active", "last_login")})
    )

    add_fieldsets = (
        (None, {"fields": ("email", "password1", "password2")})
    )

    inlines = [
        UserProfileInline
    ]


admin.site.register(StylusUser, StylusUserAdmin)