from django.shortcuts import render

from BattlleField.models import AboutBattleField
from Dungeon.models import AboutDungeon
from Library.models import AboutLibrary
from PoolOfMemory.models import AboutPoolOfMemory
from RoundTable.models import AboutRoundTable
from .models import AboutMainHall


def mainhall(request):
    my_data = AboutMainHall.objects.all()
    content_battlefield = AboutBattleField.objects.all()
    content_dungeon = AboutDungeon.objects.all()
    content_pool_of_memory = AboutPoolOfMemory.objects.all()
    content_library = AboutLibrary.objects.all()
    content_round_table = AboutRoundTable.objects.all()
    contaxt = {"prTitle": "Главный зал",
               "data": my_data,
               "battlefield": content_battlefield,
               "dungeon": content_dungeon,
               "pool_of_memory": content_pool_of_memory,
               "library": content_library,
               "round_table": content_round_table,
               "this_path": request.get_full_path()}
    return render(request, "connects/main_parts.html", contaxt)