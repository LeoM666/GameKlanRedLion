from django.shortcuts import render

from Dungeon.models import AboutDungeon
from Library.models import AboutLibrary
from MainHall.models import AboutMainHall
from PoolOfMemory.models import AboutPoolOfMemory
from RoundTable.models import AboutRoundTable
from .models import AboutBattleField


def battlefield(request):
    id_room = 3
    my_data = AboutBattleField.objects.all()
    content_round_table = AboutRoundTable.objects.all()
    content_dungeon = AboutDungeon.objects.all()
    content_pool_of_memory = AboutPoolOfMemory.objects.all()
    content_library = AboutLibrary.objects.all()
    content_main_hall = AboutMainHall.objects.all()
    contaxt = {"prTitle": "Поле боя",
               "data": my_data,
               "round_table": content_round_table,
               "dungeon": content_dungeon,
               "pool_of_memory": content_pool_of_memory,
               "library": content_library,
               "main_hall": content_main_hall,
               "this_path": request.get_full_path()}
    return render(request, "connects/battlefield_parts.html", contaxt)