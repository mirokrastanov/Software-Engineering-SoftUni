initial_number = int(input())
bonus_pts = 0

if initial_number <= 100:
    bonus_pts = 5
elif initial_number <= 1000:
    bonus_pts = 0.2 * initial_number
else:
    bonus_pts = 0.1 * initial_number

if initial_number % 2 == 0:
    bonus_pts += 1

if initial_number % 10 == 5:
    bonus_pts += 2

total_pts = initial_number + bonus_pts

print(bonus_pts)
print(total_pts)
