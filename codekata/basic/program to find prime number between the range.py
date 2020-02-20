#program to find prime number between the range
start,end=map(int,input().split())
sum=0
for i in range(start,end+1):
    for j in range(2,i):
        if(i%j==0):
            break
    else:
        
        sum=sum+1 
print(sum)
        
        
	
    	
