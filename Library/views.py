from django.shortcuts import render

from BattlleField.models import AboutBattleField
from Dungeon.models import AboutDungeon
from MainHall.models import AboutMainHall
from PoolOfMemory.models import AboutPoolOfMemory
from RoundTable.models import AboutRoundTable
from .models import AboutLibrary


def library(request):
    my_data = AboutLibrary.objects.all()
    content_battlefield = AboutBattleField.objects.all()
    content_dungeon = AboutDungeon.objects.all()
    content_pool_of_memory = AboutPoolOfMemory.objects.all()
    content_round_table = AboutRoundTable.objects.all()
    content_main_hall = AboutMainHall.objects.all()
    contaxt = {"prTitle": "Библиотека",
               "data": my_data,
               "battlefield": content_battlefield,
               "dungeon": content_dungeon,
               "pool_of_memory": content_pool_of_memory,
               "round_table": content_round_table,
               "main_hall": content_main_hall,
               "this_path": request.get_full_path()}
    return render(request, "connects/library_parts.html", contaxt)
