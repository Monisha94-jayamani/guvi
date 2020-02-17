#You are given with Principle amount($), Interest Rate(%) and Time (years) in that order.
def interest():
    P,T,R = map(float, input().split())
    SI=float(P*T*R/100)
    si=round(SI,2)
    return si
res=interest()
print(res)
