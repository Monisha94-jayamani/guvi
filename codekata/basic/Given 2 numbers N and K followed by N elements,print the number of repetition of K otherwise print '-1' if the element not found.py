#Given 2 numbers N and K followed by N elements,print the number of repetition of K otherwise print '-1' if the element not found.
N,K=map(int,input().split())
A=list(map(int,input().split()))
length=len(A)
sum=0
for i in range(0,length):
    if(K==A[i]):
        sum=1
if(sum<1):
    print(-1)
else:
    print(0)
