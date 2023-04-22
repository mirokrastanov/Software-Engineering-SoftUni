from math import ceil
from math import floor


days = int(input())
day1 = float(input())
total = 0
total += day1

for day in range(days):
    new_percent = int(input())
    new_day = ((new_percent / 100) * day1) + day1
    total += new_day
    day1 = new_day

diff = abs(1000 - total)
if total >= 1000:
    print(f"You've done a great job running {ceil(diff)} more kilometers!")
else:
    print(f"Sorry Mrs. Ivanova, you need to run {ceil(diff)} more kilometers!")
