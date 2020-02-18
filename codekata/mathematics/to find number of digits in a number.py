#to find number of digits in a number
n=input() 
#to convert the number in separate digits in list
digits = [int(x) for x in str(n)]
#to find the length
length=len(digits)
print(length)
