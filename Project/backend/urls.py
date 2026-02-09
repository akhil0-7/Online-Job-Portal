from django.contrib import admin
from django.urls import path, include
from django.http import HttpResponse   # add this

def home(request):
    return HttpResponse("Welcome to Online Job Portal Backend")

urlpatterns = [
    path('', home),   # homepage
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),
]
