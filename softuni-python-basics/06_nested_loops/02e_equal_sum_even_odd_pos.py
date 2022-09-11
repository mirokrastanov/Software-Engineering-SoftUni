num1_str = input()
num2_str = input()
num1 = int(num1_str)
num2 = int(num2_str)

for current in range(num1, num2 + 1):
    current_str = str(current)
    even_sum = 0
    odd_sum = 0
    for pos in range(0, 6):
        current_pos = int(current_str[pos])
        if pos % 2 == 0:
            even_sum += current_pos
        else:
            odd_sum += current_pos
    if even_sum == odd_sum:
        print(current, end=" ")
