from random import randint

number = randint(1, 10)
guess = 0

while guess != number:
    guess = input('Guess a number between 1 and 10 (or type q to quit): ')
    if guess == 'q':
        print('Quitting... Thanks for playing!')
        break

    guess = int(guess)

    if guess > number:
        print(f'{guess} is too high')
    elif guess < number:
        print(f'{guess} is too low')
    else:
        print(f'{guess} is right')
        break
