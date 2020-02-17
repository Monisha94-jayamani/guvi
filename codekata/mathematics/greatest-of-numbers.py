n = int(input("") )
digits = [int(x) for x in str(n)]
print (digits)
length=len(digits)
#print (length)
m=0
j=1
for i in range(0,length):
    m=m+digits[i]
#print (m)
for i in range(0,length):
    j=j*digits[i]
#print(j)
sum=m+j 
if(sum==n):
    print("Great")
else:
    print("no")

    
