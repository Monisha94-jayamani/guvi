#program to reverse a words in string
def reverseWords(str): 
    inputWords = str.split(" ") 
    inputWords=inputWords[-1::-1] 
    output = ' '.join(inputWords) 
    return output 
  

str =input("")
print (reverseWords(str))
