s = "GLOBAL VARIABLE!"

def func():
    mylocal = 10
    print(locals())
    print(globals())
    print(globals()["s"])


func()


def hello(name="Jose"):
    return "Hello " + name

print(hello())

mynewgreet = hello

print(mynewgreet())

def hello(name = "Jose"):
    print("The Hello() function has been run!")

    def greet():
        return "This string is inside greet()"
    
    def welcome(): return "This string is inside welcome()"



hello()