#program to find the form of sides of right angled triangle 
A,B,C=map(int,input("").split())
#condition to check whether it form the right angled triangle
if((A+B<=C) or (B+C<=A) or (C+A<=B)):
	print("no")
else:
	print("yes")
