#Given a number N, print the sum of its first and last digit.
N=int(input())
number=[int(x) for x in str(N)]
#print(number)
length=len(number)
result=number[0]+number[length-1]
print(result)
