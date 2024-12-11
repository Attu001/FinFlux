from django.http import JsonResponse
from newsapi import NewsApiClient
import json 

def get_data(request):
    data={
        "message":"hello from django!"
    }
    return JsonResponse(data)


#Apikey newsapi = NewsApiClient(api_key='55104424b4614670950db6ea3f297f82')


def news_data(request):
    #path to the file that contain json data stored from api of 
    file_path='C:/Users/atish/Downloads/newsdataforapi.json'

    try:
        #try to open the file
        with open(file_path,'r') as file:
            data=json.load(file)

            #return data
            return JsonResponse(data,safe=False)
        
    except FileNotFoundError:
        return JsonResponse({'error':'File not found'},status=404)
    except json.JSONDecodeError:
        return JsonResponse({'error':'Invalid json format'},status=400)


   