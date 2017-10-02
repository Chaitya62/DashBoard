from django.shortcuts import render, redirect
from django.http import HttpResponse,HttpResponseRedirect
from .forms import LoginForm
from .models import Login, Schedule, Announcement
import bcrypt

# Create your views here.
def schedule(request, waste_data):
	schedules = Schedule.objects.all()
	return render(request, 'login/schedule.html', {"list": schedules, "team_name": request.session['username'], "team_repo": request.session['github_repo']})

def rules(request, waste_data):
	return render(request, 'login/rules-and-guidelines.html', {"team_name": request.session['username'], "team_repo": request.session['github_repo']})

def login(request):
	if request.session.get('logged', False) == True:
		return redirect('/home/'+str(request.session['id'])+'/')

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
				request.session['id'] = str(id)
				request.session['username'] = query.username
				if query.github_repo:
					request.session['github_repo'] = query.github_repo
				else:
					request.session['github_repo'] = "../"+str(id)+"/#"
				request.session['wifi_user_1'] = query.wifi_username_1
				request.session['wifi_user_2'] = query.wifi_username_2
				request.session['wifi_pass_1'] = query.wifi_password_1
				request.session['wifi_pass_2'] = query.wifi_password_2
				return redirect('/home/'+str(id)+'/')
			request.session['message'] = "Invalid password or username"
		except:
			request.session['message'] = "Invalid password or username"
			return redirect('/login/')
	message = ''
	if('message' in request.session):
		message= request.session['message']
	forms = LoginForm()

	return render(request, 'login/login.html',{"message":message,"title": "Login","forms": forms })


def home(request, id):
	if(request.session['id'] == id):
		schedules = Schedule.objects.all()
		announcements = Announcement.objects.all()
		return render(request,'login/landing_page.html',{"announcements": announcements, "list": schedules, "title": "Home", "id": id, "team_name": request.session['username'], "team_repo": request.session['github_repo'], "username1": request.session['wifi_user_1'], "username2": request.session['wifi_user_2'], "password1": request.session['wifi_pass_1'], "password2": request.session['wifi_pass_2']})
	else:
		return redirect('/login/')


def logout(request):
	request.session['logged'] = False
	return HttpResponseRedirect('/login')
