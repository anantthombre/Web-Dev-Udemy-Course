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