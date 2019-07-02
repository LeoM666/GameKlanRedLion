from django.shortcuts import render
from .models import AboutMainHall

def mainhall(request):
    my_data = AboutMainHall.objects.all()
    contaxt = {"prTitle": "Главный зал", "data": my_data}
    return render(request, "connects/main_parts.html", contaxt)