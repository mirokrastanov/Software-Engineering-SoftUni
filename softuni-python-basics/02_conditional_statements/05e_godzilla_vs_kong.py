budget = float(input())
extras = int(input())
clothing_per_extra = float(input())
decor = 0.1 * budget
if extras > 150:
    clothing_per_extra *= 0.9

costs = (extras * clothing_per_extra) + decor
if costs > budget:
    print("Not enough money!")
    print(f"Wingard needs {(costs - budget):.2f} leva more.")
else:
    print("Action!")
    print(f"Wingard starts filming with {(budget - costs):.2f} leva left.")

