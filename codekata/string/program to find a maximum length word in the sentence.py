#program to find a maximum length word in the sentence
S,K=map(str,input().split())
s1=len(S)
s2=len(K)
if(s1==s2):
    print(S)
elif(s1<s2):
	res=s1
	print(K)
else:
	res=s2
	print(S)

	
