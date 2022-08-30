days = int(input())
accommodation_type = input()
feedback = input()
price_per = 0

if accommodation_type == "room for one person":
    price_per = 18
elif accommodation_type == "apartment":
    price_per = 25
    if days < 10:
        price_per *= 0.7
    elif 10 <= days <= 15:
        price_per *= 0.65
    elif days > 15:
        price_per *= 0.5
elif accommodation_type == "president apartment":
    price_per = 35
    if days < 10:
        price_per *= 0.9
    elif 10 <= days <= 15:
        price_per *= 0.85
    elif days > 15:
        price_per *= 0.8

cost = price_per * (days - 1)
if feedback == "positive":
    cost *= 1.25
elif feedback == "negative":
    cost *= 0.9

print(f"{cost:.2f}")
