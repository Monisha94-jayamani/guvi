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
            str=input("you need to access the cash yes or no:")
            if(str=="yes"):
                requestingcash=int(input("enter the cash you need to accsessible:"))
                if(requestingcash>=userbalance and userbalance>=1000):
                    print("not accsessible")
                else:
                    userbalance=userbalance-requestingcash  
                    print(requestingcash,"accessed")
                    print("userbalance",userbalance)
                    print("thank you for ur service")
                    exit()
            else:
                print("thank you")
                exit()
    else:
        i=i+1
        
exit()    
    


