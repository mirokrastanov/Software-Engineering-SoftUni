num1 = int(input())
num2 = int(input())
magic = int(input())
combination_counter = 0
combination_found = False

for i in range(num1, num2 + 1):
    for j in range(num1, num2 + 1):
        result = i + j
        combination_counter += 1
        if result == magic:
            print(f"Combination N:{combination_counter} ({i} + {j} = {result})")
            combination_found = True
            break
    if combination_found:
        break
if not combination_found:
    print(f"{combination_counter} combinations - neither equals {magic}")
