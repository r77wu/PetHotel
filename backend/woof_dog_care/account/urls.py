from django.urls import path, include
from . import views
# from rest_framework import routers
from rest_framework.authtoken.views import obtain_auth_token

# router = routers.DefaultRouter()
# router.register('profiles', views.ProfileView, basename='Profile')

urlpatterns = [
    #path('', include(router.urls)),
    path('profile/', views.ProfileView, name='profile'),
    path('register/', views.regirstrationView, name='register'),
    path('login/', views.CustomAuthToken.as_view(), name='login')
]
