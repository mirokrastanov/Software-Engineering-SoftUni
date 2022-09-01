numbers = int(input())
even_sum = 0
odd_sum = 0

for num in range(1, numbers + 1):
    current = int(input())
    if num % 2 == 0:
        even_sum += current
    else:
        odd_sum += current
diff = abs(odd_sum - even_sum)
if even_sum == odd_sum:
    print("Yes")
    print(f"Sum = {even_sum}")
else:
    print("No")
    print(f"Diff = {diff}")
