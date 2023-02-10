#Basics

my_string = "abcdefg"
print(my_string)

#Indexing

print(my_string[0])
print(my_string[-1])
print(my_string[3])

#Slicing

print(my_string[4:])
print(my_string[:3])
print(my_string[2:5])
print(my_string[::2])
print(my_string[1:6:2])

#Basic Methods

print(my_string.upper())
print(my_string.lower())
print(my_string.capitalize())
my_string = "Hello World"
print(my_string.split())
print(my_string.split("e"))

#Print Formatting

x = "Insert another string here. {}".format("Insert Me!")
print(x)

y = "Item One: {}. Item Two: {}".format("apple", "orange")
print(y)

z = "Item Three: {b}. Item Four: {a}".format(a = "rasberry", b = "mulberry")
print(z)