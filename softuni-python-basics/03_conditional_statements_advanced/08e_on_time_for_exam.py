exam_hour = int(input())
exam_min = int(input())
exam_total_min = exam_hour * 60 + exam_min
arrival_hour = int(input())
arrival_min = int(input())
arrival_total_min = arrival_hour * 60 + arrival_min
print_hour = 0
print_min = 0

if exam_total_min > arrival_total_min:
    print_min = exam_total_min - arrival_total_min
    if print_min >= 60:
        print_hour = print_min // 60
        print_min = print_min % 60
elif arrival_total_min > exam_total_min:
    print_min = arrival_total_min - exam_total_min
    if print_min >= 60:
        print_hour = print_min // 60
        print_min = print_min % 60

if 0 <= exam_total_min - arrival_total_min <= 30:
    print("On time")
elif exam_total_min - arrival_total_min > 30:
    print("Early")
elif exam_total_min - arrival_total_min < 0:
    print("Late")

if exam_total_min - arrival_total_min != 0:
    if 0 < exam_total_min - arrival_total_min < 60:
        print(f"{print_min} minutes before the start")
    elif exam_total_min - arrival_total_min >= 60:
        if print_min < 10:
            print(f"{print_hour}:0{print_min} hours before the start")
        else:
            print(f"{print_hour}:{print_min} hours before the start")
    elif 0 > exam_total_min - arrival_total_min > -60:
        print(f"{print_min} minutes after the start")
    elif exam_total_min - arrival_total_min <= -60:
        if print_min < 10:
            print(f"{print_hour}:0{print_min} hours after the start")
        else:
            print(f"{print_hour}:{print_min} hours after the start")

