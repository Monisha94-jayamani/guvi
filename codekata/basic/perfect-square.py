#perfect square
#getting input
N,K = map(int,input().split())
n=N*K
sum = 0
#range to get perfect square
for i in range(1, N+1):
    n1=i**2
    if (n1 == n):
        sum=sum+1
if(sum>0):
    print("yes")
else:
    print("no")
