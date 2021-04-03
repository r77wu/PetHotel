from django.urls import path, include
from .views import PetView, PetDetailView

urlpatterns = [
    path('', PetView, name='pets'),
    path('detail/<int:pk>', PetDetailView, name="pet detail")
]
