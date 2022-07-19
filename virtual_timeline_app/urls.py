from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('backend.urls')),
    path('accounts/', include('django.contrib.auth.urls')),
    re_path('.*', TempleteView.as_view(template_name='index.html'))
]
