initial_num = int(input())
next_num = int(input())
total_sum = next_num
while total_sum < initial_num:
    next_num = int(input())
    total_sum += next_num
print(total_sum)
