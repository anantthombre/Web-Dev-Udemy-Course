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
