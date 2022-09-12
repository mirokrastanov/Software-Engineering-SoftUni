input_n = int(input())

for num in range(1111, 10000):
    num_as_str = str(num)
    magic = True
    for i in range(len(num_as_str)):
        digit = int(num_as_str[i])
        if digit == 0:
            magic = False
            break
        if digit > 0:
            if input_n % digit != 0:
                magic = False
                break
    if magic:
        print(num, end=" ")
