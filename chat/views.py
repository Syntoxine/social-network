from django.shortcuts import render

from chat.models import Room

def index_view(request):
    return render(request, 'chat/index.html', context={
        'rooms': Room.objects.all()
    })
    
def room_view(request, room_name):
    room, created = Room.objects.get_or_create(name=room_name)
    return render(request, 'chat/room.html', context={
        'room': room
    })