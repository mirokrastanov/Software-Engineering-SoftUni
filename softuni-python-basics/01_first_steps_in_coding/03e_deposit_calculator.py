deposit = float(input())
duration = float(input())
percent = float(input()) / 100


total_sum = (((deposit * percent)/12) * duration) + deposit
print(total_sum)
