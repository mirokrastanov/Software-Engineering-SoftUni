student = 0
standard = 0
kid = 0
all_tickets = 0
command = input()
finish = False

while command != "Finish":
    movie_name = command
    capacity = int(input())
    current_capacity = 0
    for _ in range(capacity):
        ticket = input()
        if ticket == "End":
            break
        if ticket == "Finish":
            finish = True
            break
        if capacity - current_capacity > 0:
            current_capacity += 1
            all_tickets += 1
            if ticket == "student":
                student += 1
            elif ticket == "standard":
                standard += 1
            elif ticket == "kid":
                kid += 1
        else:
            break
    print(f"{movie_name} - {(current_capacity / capacity * 100):.2f}% full.")
    if not finish:
        command = input()
        if command == "Finish":
            finish = True
if finish:
    print(f"Total tickets: {all_tickets}")
    print(f"{(student / all_tickets * 100):.2f}% student tickets.")
    print(f"{(standard / all_tickets * 100):.2f}% standard tickets.")
    print(f"{(kid / all_tickets * 100):.2f}% kids tickets.")
