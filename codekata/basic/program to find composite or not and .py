#program to find composite or not
sum=0
i=int(input())
for j in range(2,i):
    if(i%j==0):
        sum=1
if(sum==1):
    print("yes")
else:
    print("no")
        
