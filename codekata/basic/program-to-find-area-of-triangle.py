#program to find the area of triangle
#getting input
N,K=map(int,input().split())
#function to calculate the area of triangle
def area():
    area=(N*K)/2
    return area
res=area()
print(res)
