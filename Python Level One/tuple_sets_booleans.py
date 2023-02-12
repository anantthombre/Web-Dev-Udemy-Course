# Booleans

True
False
0
1

# Tuples

t = (1, 2, 3)
print(t[0])

t = ('a', True, 123)
print(t)

# Tuples are immutable
# t[0] = "New Item"  
# Above line throws following error - TypeError: 'tuple' object does not support item assignment

# Sets (Unordered collection of unique elements)

x = set()

x.add(0)
x.add(1)
x.add(4)
x.add(0.1)
x.add(4)
x.add(4)
print(x)

converted = set([1, 1, 1, 1, 2, 2 ,3, 3, 3, 3, 5, 5, 5, 5])
print(converted)