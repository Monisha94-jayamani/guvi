#chech the input is odd or even
#Get input from user
a=float(input(""))
#check the input equal to zero
def oddreven():
    if(a==0):
    #print zero
        return "Zero"
    else:
    #roundoff the input
        b=round(a)
        if(b%2==0):
            return "Even"
        else:
            return "Odd"
res=oddreven()
print(res)
