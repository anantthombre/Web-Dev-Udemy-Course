x = 25

def my_func():
    x = 50
    return x

print(x) # x in global scope
print(my_func()) # x in local function scope
my_func()
print(x)  # x still in local function scope
x = my_func() # local x value assigined to the global x
print(x) #global x changed the value as function's x value was transfered to it

# Enclosing Function Locals

name = "This is a global name!"

def greet():
    name = "Sammy"

    def hello():
        print("Hello " + name)

    hello()
    
greet()
print(name)

x = 50

def func():
    # global x # it is used to when global variable needs to be reassigned inside a function. It is not reccomneded to directly reassign a global variable inside a function. You can reassign it outside the function. example --> x = func()
    x = 1000
    return x

print("before func call, x is: ", x)
x = func()
print("after func call, x is: ", x)
