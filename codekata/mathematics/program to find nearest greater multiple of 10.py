#program to find nearest greater multiple of 10
n=int(input())
def round( n ): 
	# Smaller multiple 
    a = (n // 10) * 10
	# Larger multiple 
    b = a + 10
    return b

print(round(n)) 
  
