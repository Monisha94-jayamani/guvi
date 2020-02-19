username="Monisha"
definedpassword="123"
userbalance=5000
hashdefinedpassword=hash(definedpassword)
hashedusername=hash(username)
#print(hashdefinedpassword)
i=0
while(i<5):
    runtimeusername=input("enter the username:")
    runtimepassword=input("enter the password:")
    hashedruntimeuser=hash(runtimeusername)
    hashedruntimepassword=hash(runtimepassword)
    #print(hashedruntimepassword)
    if(hashedusername== hashedruntimeuser):
        if(hashdefinedpassword==hashedruntimepassword):
            print("ok")
            N=1000
            i=0
            while(i<=N):
                tocheckbalance=input("you need to check balance: yes or no:")
                if(tocheckbalance=="yes"):
                    print("your balance is:",userbalance)
                cashdeposit=input("the cash you need to deposit:")
                if(cashdeposit=="yes"):
                    userdeposit=int(input("enter the cash u need to deposit:"))
                    userbalance=userbalance+userdeposit
                    print("new balance",userbalance)
                cash=input("you need to access the cash yes or no:")
                if(cash=="yes"):
                    requestingcash=int(input("enter the cash you need to accsessible:"))
                    if(requestingcash>=userbalance and userbalance>=1000):
                        print("not accsessible")
                    else:
                        userbalance=userbalance-requestingcash  
                        print(requestingcash,"accessed")
                        print("userbalance",userbalance)
                        print("thank you for ur service")
                    
                #else:
                    #print("do u want to continue servies yes or no")
                    
                    
                
                service=input("to do want continue yes or no:")
                if(service=="no"):
                    exit()
                i=i+1
    else:
        i=i+1
        
exit()    
    


