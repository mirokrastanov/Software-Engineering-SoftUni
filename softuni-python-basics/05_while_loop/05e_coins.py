change = float(input())
coin_counter = 0
change_paid = False

while not change_paid:
    if change >= 2:
        coin_counter += 1
        change -= 2
        change = round(change, 2)
    elif change >= 1:
        coin_counter += 1
        change -= 1
        change = round(change, 2)
    elif change >= 0.5:
        coin_counter += 1
        change -= 0.5
        change = round(change, 2)
    elif change >= 0.2:
        coin_counter += 1
        change -= 0.2
        change = round(change, 2)
    elif change >= 0.1:
        coin_counter += 1
        change -= 0.1
        change = round(change, 2)
    elif change >= 0.05:
        coin_counter += 1
        change -= 0.05
        change = round(change, 2)
    elif change >= 0.02:
        coin_counter += 1
        change -= 0.02
        change = round(change, 2)
    elif change >= 0.01:
        coin_counter += 1
        change -= 0.01
        change = round(change, 2)
    if change == 0:
        change_paid = True
print(coin_counter)