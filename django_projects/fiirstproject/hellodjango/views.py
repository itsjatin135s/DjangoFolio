from django.shortcuts import render,HttpResponse
import pymongo
from hellodjango.models import Contact
from datetime import datetime
from django.contrib import messages
# Create your views here.


#database client

client = pymongo.MongoClient('YOUR MONGO DB URL')


def index(request):
	context = {
	
	}
	return render(request,'index.html',context)


def server(request):
	return HttpResponse('Welcome to server room')

def about(request):
	return render(request,'about.html')


def contact(request):
	context = {
	
	}
	if request.method=='POST':
		name = request.POST.get('name')
		email = request.POST.get('email')
		message = request.POST.get('message')
		date = datetime.today()

		#mongo connect 
		mydb = client["firstbase"]
		mycol = mydb["collone"]
		data = {
		'name': name, 'email' : email, 'message' : message, 'date' : date
		}
		try:
			mycol.insert_one(data)
			messages.add_message(request, messages.INFO, 'Your Mesage is recived on my end and I will respond ASAP')
		except:
			messages.add_message(request, messages.INFO, 'Got Some Issue while getting your response please try again.')

			
		# #sqlite3
		# contact = Contact(name = name,email = email, message = message, date = date)
		# contact.save()
	return render(request,'contact.html',context)
