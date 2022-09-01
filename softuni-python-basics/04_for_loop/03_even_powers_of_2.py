number = int(input())

for i in range(number + 1):
    if i % 2 != 0:
        continue
    result = 2 ** i
    print(result)
