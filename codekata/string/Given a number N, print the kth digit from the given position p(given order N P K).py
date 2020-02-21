#Given a number N, print the kth digit from the given position p(given order N P K).
N,P,K=map(int,input().split())
N=[int(x) for x in str(N)]
index=P+(K-1)
print(N[index])
