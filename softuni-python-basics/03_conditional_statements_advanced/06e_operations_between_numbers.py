number1 = int(input())
number2 = int(input())
operator = input()
result = 0
even = False
divider_is_0 = False
if number2 == 0:
    divider_is_0 = True

if operator == "+":
    result = number1 + number2
    if result % 2 == 0:
        even = True
    if even:
        print(f"{number1} {operator} {number2} = {result} - even")
    else:
        print(f"{number1} {operator} {number2} = {result} - odd")
elif operator == "-":
    result = number1 - number2
    if result % 2 == 0:
        even = True
    if even:
        print(f"{number1} {operator} {number2} = {result} - even")
    else:
        print(f"{number1} {operator} {number2} = {result} - odd")
elif operator == "*":
    result = number1 * number2
    if result % 2 == 0:
        even = True
    if even:
        print(f"{number1} {operator} {number2} = {result} - even")
    else:
        print(f"{number1} {operator} {number2} = {result} - odd")
elif operator == "/":
    if not divider_is_0:
        result = number1 / number2
        print(f"{number1} {operator} {number2} = {result:.2f}")
    else:
        print(f"Cannot divide {number1} by zero")
elif operator == "%":
    if not divider_is_0:
        result = number1 % number2
        print(f"{number1} {operator} {number2} = {result}")
    else:
        print(f"Cannot divide {number1} by zero")
