price = 0
won_money = 0

day_target = int(input())
cutting = input()
while won_money < day_target and cutting != "closed":
    command = input()
    if cutting == "haircut":
        if command == "mens":
            price = 15
            won_money += price
        elif command == "ladies":
            price = 20
            won_money += price
        elif command == "kids":
            price = 10
            won_money += price
    if cutting == 'color':
        if command == "touch up":
            price = 20
            won_money += price
        elif command == "full color":
            price = 30
            won_money += price
    cutting = input()

if won_money >= day_target:
    print("You have reached your target for the day!")
else:
    print(f'Target not reached! You need {(day_target - won_money)}lv. more.')

print(f"Earned money: {won_money}lv.")