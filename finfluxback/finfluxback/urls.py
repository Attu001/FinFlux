
from django.contrib import admin
from django.urls import path
from .import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/data',views.get_data,name='get_data'),
    path('api/newsdata',views.news_data,name='news_data')
]


