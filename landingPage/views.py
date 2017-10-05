from django.shortcuts import render

# Create your views here.
def index(request):
	return render(request, 'landingPage/index.html')

def sponsors(request):
	return render(request, 'landingPage/sponsors.html')
