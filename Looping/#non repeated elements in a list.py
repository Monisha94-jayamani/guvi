#non repeated elements in a list
n=int(input())
list1=list(map(int,input().split()))
length=len(list1)
rep=[]
nonrep=[]
for i in range(0,length):
    for j in range(i+1,length):
        if(list1[i]==list1[j]):
            rep.append(list1[i])
            break
        else:
            nonrep.append(list1[i])
            break
non=len(nonrep)
print(non)
print(nonrep)
if(non<=3):
    print(nonrep[2])
else:
    print(-1)
