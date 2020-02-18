#program to find sum of arithmetic series
#function to find sum of arithmetic series
def sumOfAP( a, d,n) : 
    sum = 0
    i = 0
    while i < n : 
        sum = sum + a 
        a = a + d 
        i = i + 1
    return sum
A,B,C= map(int,input().split())
a=A
d=B
n=C
print (sumOfAP(a, d, n)) 
  
