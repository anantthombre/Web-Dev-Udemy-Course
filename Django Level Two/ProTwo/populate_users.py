import os
os.environ.setdefault("DJANGO_SETTINGS_MODULE", 'ProTwo.settings')

import django
django.setup()

from apptwo.models import User
from faker import Faker

fakegen = Faker()

def populate(N=5):
    for entry in range(N):

        fake_first_name, fake_last_name = fakegen.name().split()
        fake_email = fakegen.email()

        # New entry in Database
        user = User.objects.get_or_create(first_name = fake_first_name, last_name = fake_last_name, email = fake_email)[0]


if __name__ == "__main__":
    print("Populatin Databases")
    populate(20)
    print("Populating complete")
    
