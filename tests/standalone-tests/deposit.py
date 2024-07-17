MAX_LINES = 3


def deposit():
    flag = True
    while (flag):
        amount = input('What amount to deposit? $')
        if amount.isdigit():
            amount = int(amount)
            if (amount > 0):
                flag = False
                break
            else:
                print('Amount must be greater than zero.')
        else:
            print('Invalid input. Please enter a valid number.')

    print(f'Deposit successful. Amount: ${amount}')
    return amount


def main():
    balance = deposit()


main()
