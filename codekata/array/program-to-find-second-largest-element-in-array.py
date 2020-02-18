#program-to-find-second-largest-element-in-array
n=int(input())
a=list(map(int,input().split()))
#sort
b=sorted(a)
#grtting the index of second largest number
print(b[len(b)-2])
