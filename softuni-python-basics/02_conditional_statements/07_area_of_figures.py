from math import pi

figure = input()
dimension_1 = float(input())
result = 0

if figure == "square":
    result = dimension_1 ** 2
elif figure == "rectangle":
    dimension_2 = float(input())
    result = dimension_1 * dimension_2
elif figure == "circle":
    result = (dimension_1 ** 2) * pi
elif figure == "triangle":
    dimension_2 = float(input())
    result = dimension_1 * dimension_2 / 2

print(f"{result:.3f}")
