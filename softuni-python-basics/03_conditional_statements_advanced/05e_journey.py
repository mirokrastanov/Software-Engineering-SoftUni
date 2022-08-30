budget = float(input())
season = input()
cost = 0
accommodation = ""
destination = ""

if season == "summer":
    accommodation = "Camp"
    if budget <= 100:
        destination = "Bulgaria"
        cost = budget * 0.3
    elif budget <= 1000:
        destination = "Balkans"
        cost = budget * 0.4
    elif budget > 1000:
        destination = "Europe"
        cost = budget * 0.9
        accommodation = "Hotel"
elif season == "winter":
    accommodation = "Hotel"
    if budget <= 100:
        destination = "Bulgaria"
        cost = budget * 0.7
    elif budget <= 1000:
        destination = "Balkans"
        cost = budget * 0.8
    elif budget > 1000:
        destination = "Europe"
        cost = budget * 0.9

print(f"Somewhere in {destination}")
print(f"{accommodation} - {cost:.2f}")
