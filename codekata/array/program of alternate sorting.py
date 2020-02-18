#program of alternate sorting
N=int(input())
num1=list(map(int,input().split()))
m=sorted(num1)
#sorted from reverse
a=m[::-1]
s=[]
for i in range(N):
	s.append(a[i])
	s.append(m[i])
print(*s[:N])
