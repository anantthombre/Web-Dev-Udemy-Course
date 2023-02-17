 # Inheritance

class Animal():
    def __init__(self):
        print("Animal Created!!!")

    def who_am_I(self):
        print("Animal")

    def eat(self):
        print("Eating")


class Dog(Animal):
    def __init__(self):
        # Animal.__init__(self)
        print("Dog Created!!!")

    def bark(self):
        print("WooF WooF!!!")

    def eat(self):
        print("Dog Eating")

my_a = Animal()
my_a.who_am_I()
my_a.eat()
my_dog = Dog()
my_dog.who_am_I()
my_dog.eat()
my_dog.bark()

# Special Methods

class Book():
    
    def __init__(self, title, author, pages):
        self.title = title
        self.author = author
        self.pages = pages

    def __str__(self): #String representation of the object
        return "Title: {}, Author: {}, Pages: {}".format(self.title, self.author, self.pages)

    def __len__(self):
        return self.pages

    def __del__(self):
        print("A book has been destroyed!")






b = Book("Python", "Anant", 300)
print(b)
print(len(b))
del b