#given 2 strings S1 and s2, check whether they are case senitively
s1,s2=map(str,input().split())
count=0
#to find the length of string  is equal to check it is case sensitive
if(len(s1)==len(s2)):
	for i in range(len(s1)):
		if(s1[i]==s2[i]):
			count+=1
# check the count with length of string
if(count==len(s2)):
	print("yes")
else:
	print("no")
