trip_cost = float(input())
puzzles = int(input())
dolls = int(input())
teddy_bears = int(input())
minions = int(input())
toy_trucks = int(input())
toys = puzzles + dolls + teddy_bears + minions + toy_trucks

puzzles *= 2.6
dolls *= 3
teddy_bears *= 4.1
minions *= 8.2
toy_trucks *= 2
total_price = puzzles + dolls + teddy_bears + minions + toy_trucks

if toys >= 50:
    total_price *= 0.75

total_price *= 0.9

if total_price >= trip_cost:
    print(f"Yes! {(total_price - trip_cost):.2f} lv left.")
else:
    print(f"Not enough money! {(trip_cost - total_price):.2f} lv needed.")

