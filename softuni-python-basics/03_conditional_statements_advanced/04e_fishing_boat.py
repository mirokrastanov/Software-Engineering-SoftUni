budget = int(input())
season = input()
member_count = int(input())
boat_rent = 0

if season == "Spring":
    boat_rent = 3000
elif season == "Summer":
    boat_rent = 4200
elif season == "Autumn":
    boat_rent = 4200
elif season == "Winter":
    boat_rent = 2600

if member_count <= 6:
    boat_rent *= 0.9
elif member_count <= 11:
    boat_rent *= 0.85
elif member_count > 11:
    boat_rent *= 0.75

if member_count % 2 == 0 and season != "Autumn":
    boat_rent *= 0.95

if budget >= boat_rent:
    print(f"Yes! You have {(budget - boat_rent):.2f} leva left.")
else:
    print(f"Not enough money! You need {(boat_rent - budget):.2f} leva.")
