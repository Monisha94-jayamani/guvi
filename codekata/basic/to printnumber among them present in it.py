#to printnumber among them present in it
#getting input
N,K=map(int,input("").split())
L=list(map(int,input("").split())) 
length=(len(L))
c=0
for i in range(0,length):
	if(K==L[i]):
		c=1
if(c>=1):
    print ("yes")
else:
    print("no")

