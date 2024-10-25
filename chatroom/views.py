from django.http import HttpResponse

def general(request):
    return HttpResponse("#general")