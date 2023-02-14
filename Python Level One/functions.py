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

