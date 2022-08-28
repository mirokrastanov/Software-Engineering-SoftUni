input_hour = int(input())
input_min = int(input())

input_total = input_hour * 60 + input_min
final_total = input_total + 15

final_hour = final_total // 60
final_min = final_total % 60

if final_hour > 23:
    final_hour = 0

if final_min < 10:
    print(f"{final_hour}:0{final_min}")
else:
    print(f"{final_hour}:{final_min}")

