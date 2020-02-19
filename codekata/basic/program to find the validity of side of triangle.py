#program to find the validity of side of triangle
def checkValidity(a, b, c):  
    if (a + b <= c) or (a + c <= b) or (b + c <= a) : 
        return False
    else: 
        return True        
A,B,C=map(int,input().split())
if checkValidity(A, B, C): 
    print("yes")  
else: 
    print("no") 
