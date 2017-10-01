from django.shortcuts import render, redirect
from django.http import HttpResponse,HttpResponseRedirect
from .forms import LoginForm
from .models import Login
import bcrypt

# Create your views here.
def login(request):
	if request.session.get('logged', False) == True:
		return redirect('/home/'+str(request.session['id']))

	if request.method == 'POST':
		username = request.POST.get('username')
		password = request.POST.get('password')
		password = password.encode('utf-8')
		try:
			query = Login.objects.get(username = username)
			hashed_password = query.password.encode('utf-8')
			id = query.id
			if password == hashed_password:
				request.session['message'] = ''
				request.session['logged'] = True
				request.session['id'] = id
				return redirect('/home/'+id)
			request.session['message'] = "Invalid password or username"
		except:
			request.session['message'] = "Invalid password or username"
			return redirect('/login')
	message = ''
	if('message' in request.session):
		message= request.session['message']
	forms = LoginForm()

	return render(request, 'login/login.html',{"message":message,"title": "Login","forms": forms })


def home(request, id):
	if(request.session['id']):
		return render(request,'login/landing_page.html',{"title": "Home", "id": id})
	else:
		return redirect('/login')


def logout(request):
	request.session['logged'] = False
	return HttpResponseRedirect('/login')
