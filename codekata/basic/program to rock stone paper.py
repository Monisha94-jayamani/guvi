#program to rock stone paper
str=input()
str=str.split()
if((str[0]=='R' and str[1]=='P') or (str[0]=='P' and str[1]=='R')):
    print("P")
elif((str[0]=='R' and str[1]=='S') or (str[0]=='S' and str[1]=='R')):
    print("S")
elif((str[0]=='P' and str[1]=='S') or (str[0]=='S' and str[1]=='P')):
    print("S")
else:
    print("D")

	
