def sample(lst): # N = len(lst)
    for i in range(10):
        print(i, ":", lst[i])

# Answer: this is O(1), because it only does 10 iterations.

def sample(lst): # N = len(lst)
    i = 1
    result = 0
    while i < len(lst):
        for j in range(len(lst)):
            result += lst[j]
        i = i * 2
    return result

# Answer: this is O(n log n), because the outer loop iterates log n times, and the inner loop iterates n times.

import string
def sample(s): # N = len(s)
    result = ""
    for c in s:
        if c in string.punctuation:
            print(c)

# Answer: this is O(n), because the loop does N iterations. The in operation has to do a constant number of actions, since the value string.punctuation has a constant size.

def sample(lst): # N = len(lst)
    result = []
    for i in range(2, len(lst) - 2, 2):
        result.append(lst[i])
    return result

# Answer: This is O(n), because the loop does approximately n/2 iterations.

def sample(n): # N = n
    result = 0
    while n > 0:
        result += n
        n = n // 3
    return result

# Answer: This is O(log n), because the loop does a logarithmic number of iterations.

import string
def sample(s): # N = len(s)
    result = [ ]
    for i in range(len(s)):
        for j in range(len(string.digits)):
            if s[i] == string.digits[j]:
                result.append(s[i])
    return "".join(result)

# Answer: This is O(n), because the outer loop does n iterations, and the inner loop does a constant number of iterations.

def sample(s1, s2): # N = len(s1) = len(s2)
    for c1 in s1:
        if c1 in s2:
            print(c1)

# Answer: This is O(n^2), because the loop does n iterations, and each iteration does n work. The loop body does n work because the in operation is searching s2, which is n characters long; that means the amount of work grows as the size of the string grows.

def sample(n): # N = n
    result = 0
    while n > 0:
        result += n
        n = n - 3
    return result

# Answer: This is O(n), because the loop does n/3 iterations.

def sample(lst): # N = len(lst)
    result = []
    for i in range(0, len(lst), len(lst)//3):
        result.append(lst[i])
    return result

# Answer: This is O(1), because the loop has only three iterations.

def helper(n):
    i = 0
    while i < n:
        print(i)
        i += 1
def sample(n): # N = n
    for i in range(n):
        print("---")
        helper(i)

# Answer: This is O(n^2). The loop in sample() iterates each time. Each iteration calls helper. Helper does 1 action when n=1, 2 when n=2, etc. That means the total number of actions across all iterations is 1+2+3+4...+(n-1)+n. As we showed in class, this is ((n^2)+n)/2, so this is O(n^2) operations overall.