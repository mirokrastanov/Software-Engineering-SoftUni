width = int(input())
length = int(input())
height = int(input())
apartment_space = round(width * length * height)
remaining_space = apartment_space
command = input()

while command != "Done":
    boxes_in = int(command)
    if remaining_space - boxes_in < 0:
        diff = abs(remaining_space - boxes_in)
        print(f"No more free space! You need {diff} Cubic meters more.")
        break
    remaining_space -= boxes_in
    command = input()
if command == "Done":
    print(f"{remaining_space} Cubic meters left.")
