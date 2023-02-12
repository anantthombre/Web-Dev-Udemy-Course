# Dictionaries

my_stuff = {"key1": "value1", "key2": "value2", "key3": {"123": [1, 2, "grab_me"]}}
print(my_stuff)
print(my_stuff["key1"])
print(my_stuff["key2"])
print(my_stuff["key3"])
print(my_stuff["key3"]["123"][2].upper())

# Reassign values

my_stuff = {"bfast": "coffee", "lunch": "pizza"}
print(my_stuff)
print(my_stuff['lunch'])

my_stuff["lunch"] = "burger"
print(my_stuff)

my_stuff['dinner'] = 'pasta'
print(my_stuff)

