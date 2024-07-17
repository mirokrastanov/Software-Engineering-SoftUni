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

    # print(f'Deposit successful. Amount: ${amount}')
    return amount


def get_number_of_lines():
    flag = True
    while (flag):
        lines = input(
            f'Enter the number of lines to bet on (1-{str(MAX_LINES)})? ')
        if lines.isdigit():
            lines = int(lines)
            if (1 <= lines <= MAX_LINES):
                flag = False
                break
            else:
                print('Enter a valid number of lines.')
        else:
            print('Invalid input. Please enter a valid number.')

    return lines


def main():
    balance = deposit()
    lines = get_number_of_lines()
    print(balance, lines)


main()
