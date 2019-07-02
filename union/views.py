from django.shortcuts import render
from BattlleField.models import AboutBattleField
from Dungeon.models import AboutDungeon
from PoolOfMemory.models import AboutPoolOfMemory
from Library.models import AboutLibrary
from MainHall.models import AboutMainHall
from RoundTable.models import AboutRoundTable

def union(request):
    content_battlefield = AboutBattleField.objects.all()
    content_dungeon = AboutDungeon.objects.all()
    content_pool_of_memory = AboutPoolOfMemory.objects.all()
    content_library = AboutLibrary.objects.all()
    content_main_hall = AboutMainHall.objects.all()
    content_round_table = AboutRoundTable.objects.all()
    about_rooms = {
        "battlefield":content_battlefield,
        "dungeon": content_dungeon,
        "pool_of_memory": content_pool_of_memory,
        "library": content_library,
        "main_hall": content_main_hall,
        "round_table": content_round_table,
    }
    return render(request, "union/union.html", about_rooms)