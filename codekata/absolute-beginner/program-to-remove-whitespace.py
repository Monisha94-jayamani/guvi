#program to remove whitespaces 
#function to remove whitespaces
def removewhitespaces():
    A=input("")
    #to remove spaces
    s=A.replace(" ", "")
    #calculate the length of string
    length=len(s)
    return length	
res=removewhitespaces()
print(res)
