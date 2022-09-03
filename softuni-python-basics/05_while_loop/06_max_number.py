import sys

command = input()
max_number = -sys.maxsize

while command != "Stop":
    number = float(command)
    if number > max_number:
        max_number = number
    command = input()
print(f"{max_number:.0f}")
