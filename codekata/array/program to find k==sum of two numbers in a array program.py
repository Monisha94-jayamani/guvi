#program to find k==sum of two numbers in a array
N,K=map(int,input().split())
number=list(map(int,input().split()))
length=len(number)
sum=1
for i in range(0,length):
    for j in range(1,length):
        if(K==number[i]+number[j]):
        	print("yes")
        	exit()
        else:
            sum=1
            
            
if(sum>=1):
    print("no")
        
       
