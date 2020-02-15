#factorial of the number
#getting input
N=int(input(""))
def f():
    fact=1
    #range to get factorial and function
    for i in range(1,N+1):
        fact=fact*i;
    print(fact)
f()
