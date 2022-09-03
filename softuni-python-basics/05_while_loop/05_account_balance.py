command = input()
account_balance = 0

while command != "NoMoreMoney":
    transaction = float(command)
    if transaction < 0:
        print("Invalid operation!")
        break
    account_balance += transaction
    print(f"Increase: {transaction:.2f}")

    command = input()
print(f"Total: {account_balance:.2f}")
