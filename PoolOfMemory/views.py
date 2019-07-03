from django.shortcuts import render

from BattlleField.models import AboutBattleField
from Dungeon.models import AboutDungeon
from Library.models import AboutLibrary
from MainHall.models import AboutMainHall
from RoundTable.models import AboutRoundTable
from .models import AboutPoolOfMemory


def poolofmemory(request):
    my_data = AboutPoolOfMemory.objects.all()
    content_battlefield = AboutBattleField.objects.all()
    content_dungeon = AboutDungeon.objects.all()
    content_round_table = AboutRoundTable.objects.all()
    content_library = AboutLibrary.objects.all()
    content_main_hall = AboutMainHall.objects.all()
    contaxt = {"prTitle": "Круглый стол",
               "data": my_data,
               "battlefield": content_battlefield,
               "dungeon": content_dungeon,
               "round_table": content_round_table,
               "library": content_library,
               "main_hall": content_main_hall}
    return render(request, "connects/poolofmemory_parts.html", contaxt)