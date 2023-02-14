def my_func (param1="default"):
    """
    THIS IS A DOCSTRING
    """
    print("my first python function! {}".format(param1))

my_func()

def hello():
    return "hello"

result = hello()
print(result)

# Always check for the data types of the variables for the input in the function

def add_num(num1, num2):
    if type(num1) == type(num2) == type(10):
        return num1 + num2
    else:
        return "Sorry, this function needs integers"

result1 = add_num("2", "3")
print(result1)

result2 = add_num(2, 3)
print(result2)

# Lambda function

my_list = [1, 2, 3, 4, 5, 6, 7, 8]

def even_bool(num):
    return num%2 == 0

evens = filter(even_bool, my_list)  # filter function returns the items who returns the value true
print(list(evens))

evens1 = filter(lambda num:num%2 == 0,my_list)
print(list(evens1))


tweet = "Go Sports! #Sports"
result = tweet.split("#")[1]
print(result)

# in operator

print("x" in [1, 2, 3])
print("x" in [1, 2, 3, "x"])

