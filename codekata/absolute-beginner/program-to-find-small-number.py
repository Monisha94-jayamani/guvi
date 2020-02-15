#program to find small number between two
x, y = input("").split() 
#checking condition
def small():
    if(x<y):
  	    return (x)
    else:
	    return (y)
res=small()
print(res)
