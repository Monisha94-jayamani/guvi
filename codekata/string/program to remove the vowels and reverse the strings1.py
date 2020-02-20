#program to remove the vowels and reverse the strings
def rem_vowel(string): 
    vowels = ('a', 'e', 'i', 'o', 'u')  
    for x in string.lower(): 
        if x in vowels: 
            string = string.replace(x, "")
    if(string==""):
        print("-1")
    else:
        print(string[::-1]) 
  
 
string=input("")
rem_vowel(string) 
