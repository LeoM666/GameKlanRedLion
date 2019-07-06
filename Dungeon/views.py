from django.shortcuts import render

from BattlleField.models import AboutBattleField
from Library.models import AboutLibrary
from MainHall.models import AboutMainHall
from PoolOfMemory.models import AboutPoolOfMemory
from RoundTable.models import AboutRoundTable
from .models import AboutDungeon


def dungeon(request):
    my_data = AboutDungeon.objects.all()
    content_battlefield = AboutBattleField.objects.all()
    content_round_table = AboutRoundTable.objects.all()
    content_pool_of_memory = AboutPoolOfMemory.objects.all()
    content_library = AboutLibrary.objects.all()
    content_main_hall = AboutMainHall.objects.all()
    contaxt = {"prTitle": "Подземелье",
               "data": my_data,
               "battlefield": content_battlefield,
               "round_table": content_round_table,
               "pool_of_memory": content_pool_of_memory,
               "library": content_library,
               "main_hall": content_main_hall,
               "this_path": request.get_full_path()}
    return render(request, "connects/dungeon_parts.html", contaxt)