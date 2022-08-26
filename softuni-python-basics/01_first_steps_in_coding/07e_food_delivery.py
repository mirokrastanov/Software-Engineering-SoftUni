chicken_meals = int(input())
fish_meals = int(input())
vegan_meals = int(input())

chicken_meals *= 10.35
fish_meals *= 12.4
vegan_meals *= 8.15

total = chicken_meals + fish_meals + vegan_meals
dessert = 0.2 * total
total += dessert + 2.5

print(total)
