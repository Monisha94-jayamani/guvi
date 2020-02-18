#program to find difference and check it is odd or even
N,M=map(int,input().split())
even=0
if(N>M):
	even=N-M
else:
	even=M-N
if(even%2==0):
	print("even")
else:
	print("odd")
