# print("hello)

# mylisthere = [1, 2, 3]
# print(mylist)


try:
    f = open("simple.txt", "w")
    f.write("Test write to simple text!")
except IOError:
    print("ERROR: COULD NOT FIND FILE OR READ DATA!")
else:
    print("SUCCESS!")
    f.close()


try:
    f = open("simple.txt", "r")
    f.write("Test write to simple text!")
except IOError:
    print("ERROR: COULD NOT FIND FILE OR READ DATA!")
else:
    print("SUCCESS!")
    f.close()

print("Hello World!!!")


try:
    f = open("simple.txt", "r")
    f.write("Test write to simple text!")
except:
    print("ERROR: COULD NOT FIND FILE OR READ DATA!")
else:
    print("SUCCESS!")
    f.close()

print("Hello World!!!")


try:
    f = open("simple.txt", "r")
    f.write("Test write to simple text!")
except IOError:
    print("ERROR: COULD NOT FIND FILE OR READ DATA!")
finally:
    print("I ALWAYS WORK NO MATTER WHAT!")

