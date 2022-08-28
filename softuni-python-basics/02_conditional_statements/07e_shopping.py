budget = float(input())
gpus = int(input())
cpus = int(input())
ram_sticks = int(input())

costs = (gpus * 250) + (cpus * (0.35 * gpus * 250)) + (ram_sticks * (0.1 * gpus * 250))
if gpus > cpus:
    costs *= 0.85

if budget >= costs:
    print(f"You have {(budget - costs):.2f} leva left!")
else:
    print(f"Not enough money! You need {(costs - budget):.2f} leva more!")

