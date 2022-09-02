import sys

numbers = int(input())
max_number = -sys.maxsize
total_sum = 0

for num in range(numbers):
    current = int(input())
    total_sum += current
    if current > max_number:
        max_number = current
diff = abs(max_number - (total_sum - max_number))
if diff == 0:
    print("Yes")
    print(f"Sum = {max_number}")
else:
    print("No")
    print(f"Diff = {diff}")
