from django.shortcuts import render
# from apptwo.models import User
from apptwo.forms import NewUserForm
# Create your views here.

def index(request):
    return render(request, 'apptwo/index.html')

def users(request):

    form = NewUserForm()

    if request.method == "POST":
        form = NewUserForm(request.POST)

        if form.is_valid():
            form.save(commit=True)
            return index(request)
        
        else:
            print("ERORR FORM INVALID")


    return render(request, 'apptwo/user.html', {'form':form})

    # user_list = User.objects.order_by('first_name')
    # user_dict = {'users': user_list}
    # return render(request, 'apptwo/user.html', context=user_dict)

