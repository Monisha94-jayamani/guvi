username="Monisha"
definedpassword="123"
userbalance=5000
hashdefinedpassword=hash(definedpassword)
hashedusername=hash(username)
#print(hashdefinedpassword)
j=0
N=1000
username="Monisha"
hashedusername=hash(username)
while(j<N):
    runtimeusername=input("enter the username:")
    hashedruntimeuser=hash(runtimeusername)
    if(hashedruntimeuser==hashedusername):
        break
        
j=j+1
i=0
while(i<5):
    #runtimeusername=input("enter the username:")
    runtimepassword=input("enter the password:")
    #hashedruntimeuser=hash(runtimeusername)
    hashedruntimepassword=hash(runtimepassword)
    #print(hashedruntimepassword)
    if(hashedusername== hashedruntimeuser):
        if(hashdefinedpassword==hashedruntimepassword):
            print("logined successfully")
            N=1000
            c=0
            while(i<=N):
                print("1.balance")
                print("2.deposit")
                print("3.cash withdrawal")
                a=int(input("enterthe choice:"))
                if(a==1):
                    print("your balance is:",userbalance)
                if(a==2):
                    userdeposit=int(input("enter the cash u need to deposit:"))
                    userbalance=userbalance+userdeposit
                    print("new balance",userbalance)
                if(a==3):
                    requestingcash=int(input("enter the cash you need to cash withdrawal:"))
                    if(requestingcash>=userbalance and userbalance>=1000):
                        print("insufficient balance")
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
                c=c+1
    i=i+1            
else:
   
    exit()    

   


