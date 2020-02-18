#to find sorted elements in the array and print the original indices of elements
N=int(input())
n1=list(map(int,input().split()))
n2=sorted(n1)
#to print the original indices of these elements
c=[]
for a in range(N):
    for b in range(N):
        if(n2[a]==n1[b]):
             c.append(b+1)
print(*c) 
