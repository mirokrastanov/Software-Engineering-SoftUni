numbers = int(input())
left_sum = 0
right_sum = 0

for i in range(numbers * 2):
    current_num = int(input())
    if i < numbers:
        left_sum += current_num
    else:
        right_sum += current_num
diff = abs(right_sum - left_sum)

if left_sum == right_sum:
    print(f"Yes, sum = {left_sum}")
else:
    print(f"No, diff = {diff}")
