#print 1 for palindrome and 0 for not
#getting input
n=str(input())
s=n[::-1]
#reverse a string 
if(s==n):
	print("1")
else:
	print("0")  
