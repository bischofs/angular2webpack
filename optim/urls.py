from django.conf.urls import include, url
from django.contrib import admin
from django.views.generic.base import TemplateView

urlpatterns = [
    # Examples
    #url(r'^admin/', include(admin.site.urls)),
    url(r'^home/', TemplateView.as_view(template_name='home.html')),
]
