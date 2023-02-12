#Lists

my_list = [1, 2, 3]
print(my_list)
 
my_list1 = [";ajsfahf;n", 1, 2.2, True, 'asdf', [1,2,3,4]]
print(my_list1)

print(len(my_list))
print(len(my_list1))

#Lists are mutable

my_list = [1, 2, 3, 4, 5, 6, 7, 8]
print("before assignment: ", my_list)

my_list[0] = "New Item"
print("afrer assignment: ", my_list)

#Appeding items to the list

my_list.append("Appended Item")
print(my_list)

my_list.append(["Appended List", 3, 4])
print(my_list)

#Extending a List using another list

my_list.extend([9, 10, 11, 12])
print(my_list)

#To remove an item from a list. pop() method

my_list.pop()
print(my_list)

item = my_list.pop(0)
print(my_list)
print(item)

#reverse and sort method
my_list = [8, 5, 7, 3, 1, 6, 9, 2]
print(my_list)

my_list.reverse()
print(my_list)

my_list.sort()
print(my_list)
