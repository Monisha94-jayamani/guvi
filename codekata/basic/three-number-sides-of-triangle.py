#Given three numbers if they form sides of triangle
#function to check validity all three sides are not equal
def checkvalidity(A,B,C):
	if(A!=C) and (A!=B) and (B!=C):
		return True
	else:
		return False
A,B,C=map(int,input().split())
if checkvalidity(A,B,C):
	print("yes")
else:
	print("no")
