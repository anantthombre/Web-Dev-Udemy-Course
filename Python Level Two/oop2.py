class Dog():

    # Class Object Attribute (Attribute that are common among all the object of a particular class)
    species = "mammal"

    def __init__(self,breed,name):
        self.breed = breed
        self.name = name

my_dog = Dog(breed="Lab", name="Poppy")
other_dog = Dog("Boxer","Sammy")

print(type(my_dog))
print(my_dog.breed)
print(my_dog.name)
print(my_dog.species)
print(other_dog.breed)
print(other_dog.name)
print(other_dog.species)



class Circle():

    pi = 3.14

    def __init__(self, radius=1):
        self.radius = radius

    def area(self):
        return self.radius*self.radius * Circle.pi

    def set_radius(self, new_r):
        self.radius = new_r

    
myc = Circle(3)
print(type(myc))
print("current radius: ", myc.radius)
print("current area: ", myc.area())
# myc.radius = 999
myc.set_radius(100)
print("new radius: ", myc.radius)
print("new area: ", myc.area())
    
        

