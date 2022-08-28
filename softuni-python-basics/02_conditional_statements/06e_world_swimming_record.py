record_sec = float(input())
total_dist = float(input())
sec_per_m = float(input())
attempt_total = total_dist * sec_per_m
water_resistance = (total_dist // 15) * 12.5
attempt_total += water_resistance

if attempt_total < record_sec:
    print(f"Yes, he succeeded! The new world record is {attempt_total:.2f} seconds.")
else:
    print(f"No, he failed! He was {(attempt_total - record_sec):.2f} seconds slower.")

