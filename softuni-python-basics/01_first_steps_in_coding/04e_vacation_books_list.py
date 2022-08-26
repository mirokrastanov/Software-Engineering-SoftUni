from math import floor

pages_current_book = int(input())
pages_per_hour = int(input())
days_to_read = int(input())

target_hours_per_day = (pages_current_book / days_to_read) / pages_per_hour
print(floor(target_hours_per_day))
