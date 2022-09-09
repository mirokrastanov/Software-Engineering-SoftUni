n = int(input())
m = 1
row = 0

while m <= n:
    result = ""
    row += 1
    for row_num in range(1, row + 1):
        result += f"{m} "
        m += 1
        if m > n:
            break
    print(result)
