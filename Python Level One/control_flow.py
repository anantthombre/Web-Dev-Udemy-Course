# Comparison Operator

1 > 2
1 < 2
1 >= 1
1 <= 1
1 <= 4

# Equality

1 == 1
1 == "1"
"hi" == "bye"

# Inequality

1 != 2


# Logical Operators

# AND
(1 > 2) and (2 < 3)

# OR
(1 > 2) or (2 < 3)

# Multiple Logical Operators
(1 == 2) or (2 == 3) or (4 == 4)


# if & elif statements

if 1 < 2:
    print("First Block")
    if 20 < 3:
        print("Second Block")

if 1 > 2:
    print("Hello")
else:
    print("last")


if 1 > 2:
    print("Hello")
elif 3 == 3:
    print("elif statement ran")
else:
    print("last")


if 1 == 1:
    if 1 > 2:
        print("Hello")
    elif 3 == 3:
        print("elif statement ran")
    else:
        print("last")


# For Loops


seq = [1, 2, 3, 4, 5, 6]

for item in seq:
    print(item)

d = {"Sam": 1, "Frank": 2, "Dan":3}

for k in d:
    print(k)
    print(d[k])

for k in d.values():
    print(k)



my_pairs = [(1, 2), (3, 4), (5, 6)]

for tup1, tup2 in my_pairs:
    print(tup2)
    print(tup1)



# While Loops

i = 1

while i < 5:
    print("i is: {}".format(i))
    i = i + 1




# range() function

print(range(5))
print(range(0, 5))
print(list(range(5)))
print(list(range(0,20,2)))
print(list(range(0,21,2)))

for item in range(10):
    print(item)

# List Comprehension

x = [1, 2, 3, 4]

out = []
for num in x:
    out.append(num**2)

print(out)

out = [num**2 for num in x]
print(out)