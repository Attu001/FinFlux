from django.http import JsonResponse

def get_data(request):
    data={
        "message":"hello from django!"
    }
    return JsonResponse(data)