#compare two strings by length and print the string
S1,S2=map(str,input().split())
length1=len(S1)
length2=len(S2)
if(length1<length2):
	originallen=length1
else:
	originallen=length2
for i in range(0,originallen):
	print(S1[i],end="")
for i in range(0,originallen):
	print(S2[i],end="")
