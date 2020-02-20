#string that contains a and b in the length
S=input("")
a= [str(x) for x in str(S)]
length=len(S)
for i in range(0,length):
    if(a[i]=="a" or a[i]=="b"):
        sum=1
    else:
        sum=0
        print("no")
        break
if(sum==1):
    print("yes")
