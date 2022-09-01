from sys import maxsize

numbers = int(input())
min_number = maxsize
max_number = -maxsize

for i in range(numbers):
    current = int(input())
    if current > max_number:
        max_number = current
    if current < min_number:
        min_number = current

print(f"Max number: {max_number}")
print(f"Min number: {min_number}")
