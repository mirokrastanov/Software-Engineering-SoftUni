flower_type = input()
quantity = int(input())
budget = int(input())
price_per = 0

if flower_type == "Roses":
    price_per = 5
    if quantity > 80:
        price_per *= 0.9
elif flower_type == "Dahlias":
    price_per = 3.8
    if quantity > 90:
        price_per *= 0.85
elif flower_type == "Tulips":
    price_per = 2.8
    if quantity > 80:
        price_per *= 0.85
elif flower_type == "Narcissus":
    price_per = 3
    if quantity < 120:
        price_per *= 1.15
elif flower_type == "Gladiolus":
    price_per = 2.5
    if quantity < 80:
        price_per *= 1.2

cost = price_per * quantity

if budget >= cost:
    print(f"Hey, you have a great garden with {quantity} {flower_type} and {(budget - cost):.2f} leva left.")
else:
    print(f"Not enough money, you need {(cost - budget):.2f} leva more.")

