from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
from django.db.models.signals import pre_save, post_save
from django.utils.text import slugify
from django.dispatch import receiver
import time


class StylusUserManager(BaseUserManager):
    def create_user(self, email, password=None, superuser=False):
        if not email:
            raise ValueError("User must have an email.")

        if not password:
            raise ValueError("User must have a password.")

        user = self.model(
            email=self.normalize_email(email)
        )

        user.set_password(password)

        if superuser:
            user.is_staff = True
            user.is_admin = True
            user.is_superuser = True

        user.save(using=self._db)

        return user

    def create_superuser(self, email, password):
        return self.create_user(email, password, superuser=True)


class StylusUser(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField("Email", unique=True)
    username = models.CharField(max_length=200, blank=True, unique=True)

    USERNAME_FIELD = "email"

    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    date_joined = models.DateTimeField(auto_now_add=True)

    objects = StylusUserManager()

    def __str__(self):
        return self.email


class Profile(models.Model):
    user = models.OneToOneField(StylusUser, on_delete=models.CASCADE, related_name="profile")
    slug = models.SlugField(unique=True, blank=True)

    first_name = models.CharField(max_length=200, blank=True)
    last_name = models.CharField(max_length=200, blank=True)

    company = models.CharField(max_length=200, blank=True)
    address = models.CharField(max_length=200, blank=True)
    city = models.CharField(max_length=200, blank=True)
    post_code = models.CharField(max_length=200, blank=True)
    phone = models.CharField(max_length=200, blank=True)

    def __str__(self):
        return self.user.email


@receiver(pre_save, sender=StylusUser)
def create_username(sender, instance, **kwargs):
    if not instance.username:
        username = slugify(instance.email.split("@")[0])

        if StylusUser.objects.filter(username=username):
            username = f"{username}_{int(time.time())}"

        instance.username = username


@receiver(post_save, sender=StylusUser)
def create_profile(sender, instance, **kwargs):
    if kwargs["created"]:
        Profile.objects.create(user=instance)


@receiver(pre_save, sender=Profile)
def slug_generator(sender, instance, **kwargs):
    if not instance.slug:
        instance.slug = instance.user.username
