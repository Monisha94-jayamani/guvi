#to print smallest among them
#getting input
N=int(input(""))
L,R = map(int,input().split()) 
def small():
    if(L<N and N<R):
	    return "yes"
    else:
	    return "no"
res=small()
print(res)
