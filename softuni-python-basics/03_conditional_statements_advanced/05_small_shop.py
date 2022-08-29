product = input()
city = input()
quantity = float(input())
price_per = 0

if city == "Sofia":
    if product == "coffee":
        price_per = 0.5
    elif product == "water":
        price_per = 0.8
    elif product == "beer":
        price_per = 1.2
    elif product == "sweets":
        price_per = 1.45
    elif product == "peanuts":
        price_per = 1.6
elif city == "Plovdiv":
    if product == "coffee":
        price_per = 0.4
    elif product == "water":
        price_per = 0.7
    elif product == "beer":
        price_per = 1.15
    elif product == "sweets":
        price_per = 1.3
    elif product == "peanuts":
        price_per = 1.5
elif city == "Varna":
    if product == "coffee":
        price_per = 0.45
    elif product == "water":
        price_per = 0.7
    elif product == "beer":
        price_per = 1.1
    elif product == "sweets":
        price_per = 1.35
    elif product == "peanuts":
        price_per = 1.55

total = price_per * quantity
print(total)