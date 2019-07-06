from django.shortcuts import render

from BattlleField.models import AboutBattleField
from Dungeon.models import AboutDungeon
from Library.models import AboutLibrary
from MainHall.models import AboutMainHall
from PoolOfMemory.models import AboutPoolOfMemory
from .models import AboutRoundTable


def roundTable(request):
    my_data = AboutRoundTable.objects.all()
    content_battlefield = AboutBattleField.objects.all()
    content_dungeon = AboutDungeon.objects.all()
    content_pool_of_memory = AboutPoolOfMemory.objects.all()
    content_library = AboutLibrary.objects.all()
    content_main_hall = AboutMainHall.objects.all()
    contaxt = {"prTitle": "Круглый стол",
               "data": my_data,
               "battlefield": content_battlefield,
               "dungeon": content_dungeon,
               "pool_of_memory": content_pool_of_memory,
               "library": content_library,
               "main_hall": content_main_hall,
               "this_path": request.get_full_path()}
    return render(request, "connects/round_parts.html", contaxt)