#to get product of given number 2143=24
n=input() 
#to convert the number in separate digits in list
digits = [int(x) for x in str(n)]
length=len(digits)
product=1
#product each digits in number
for i in range(0,length):
    product=product*digits[i]
print(product)
    
