floors = int(input())
rooms_per = int(input())

for floor in range(floors, 0, -1):
    result = ""
    for room in range(rooms_per):
        type_of_room = ""
        if floor == floors:
            type_of_room = "L"
        elif floor % 2 == 0:
            type_of_room = "O"
        elif floor % 2 != 0:
            type_of_room = "A"
        result += f"{type_of_room}{floor}{room} "
    print(result)
