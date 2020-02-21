
#Print the largest element that can be form out of the array
n=int(input(""))
l=list(map(int,input().split()))
rev=l[::-1]
res=int("".join(map(str,rev)))
print(res)
