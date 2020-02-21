#program to sum first and last  number in number
N=int(input())
number=[int(x) for x in str(N)]
#print(number)
length=len(number)
result=number[0]+number[length-1]
print(result)
