from rest_framework import serializers
from .models import Profile

# What is serializing
# object -> dictionary / dictionary -> object


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = [
            "first_name",
            "last_name",
            "company",
            "address",
            "city",
            "post_code",
            "phone",
            "slug"
        ]

