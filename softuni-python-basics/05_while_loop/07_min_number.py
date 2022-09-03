import sys

command = input()
min_number = sys.maxsize

while command != "Stop":
    number = float(command)
    if number < min_number:
        min_number = number
    command = input()
print(f"{min_number:.0f}")
