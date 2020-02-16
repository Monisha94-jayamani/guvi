#program to find largest among three number
#GETTING INPUT
A=int(input(""))
B=int(input(""))
C=int(input(""))
#checking condition
def largest():
    if(A>B and A>C): 
	    return A
    elif(B>C and B>A):
	    return B
    else:
	    return (C)
res=largest()
print(res)
