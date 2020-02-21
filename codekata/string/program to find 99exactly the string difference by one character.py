#program to find exactly the string difference by one character
m,n,k=map(str,input().split())
str1=m.lower()
str2=n.lower()
string1=[str(x) for x in str(str1)]
string2=[str(y) for y in str(str2)]
length1=len(string1)
j=int(k)
count=0
length2=len(string2)
if(length1==length2):
    for i in range(0,length1):
        if(string1[i]==string2[i]):
            count=count+0
        else:
            count=count+1
if(count==j):
    print("yes")
else:
    print("no")
