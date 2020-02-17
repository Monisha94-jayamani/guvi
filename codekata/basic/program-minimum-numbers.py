#program to find minimum number among 10 number
#getting multiple inputs from single line and cast to list
list = list(map(int, input("").split())) 
#sort function
list.sort() 
print("",*list[:1]) 
