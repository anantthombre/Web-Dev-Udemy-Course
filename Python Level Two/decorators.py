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

    print(greet())
    print(welcome())
    print("End of Hello() function")



hello()



def hello(name = "Jose"):
    print("The Hello() function has been run!")

    def greet():
        return "This string is inside greet()"
    
    def welcome(): return "This string is inside welcome()"

    if name == "Jose":
        return greet
    else:
        return welcome
    
x = hello()

print(x())

def hello():
    return "Hi Jose!"

def other(func):
    print("Hello")
    # print(func)
    print(func())

other(hello)


def new_decorator(func):

    def wrap_func():
        print("Code Here Before Executing func")
        func()
        print("Func() has been called")

    return wrap_func


@new_decorator
def func_needs_decorator():
    print("This function is need in the decorator!")

# func_needs_decorator()
# func_needs_decorator = new_decorator(func_needs_decorator)

func_needs_decorator()