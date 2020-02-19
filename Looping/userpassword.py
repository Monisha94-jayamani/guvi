username="Monisha"
definedpassword="123"
hashdefinedpassword=hash(definedpassword)
#print(hashdefinedpassword)
i=0
while(i<5):
    runtimepassword=input("enter the password:")
    hashedruntimepassword=hash(runtimepassword)
    #print(hashedruntimepassword)
    if(hashdefinedpassword==hashedruntimepassword):
        print("ok")
        exit()
    else:
        i=i+1
        
exit()    
    


