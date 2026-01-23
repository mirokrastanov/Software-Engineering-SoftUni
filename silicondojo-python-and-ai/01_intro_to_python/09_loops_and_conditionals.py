# Conditionals - same as in JS

# == , != , > , < , >= , <=      same as in JS

# Logical Operators
# &&  and
# ||  or
# !   not  - example: 1 not in [1, 2, 3]

# Other
# None   null   in JS
# True   true   in JS
# False  false  in JS
#  1 in [1, 2, 3]  =   [1, 2, 3].includes(1)  in JS


#  WHILE LOOPS
x = 0
while x <= 5:
    print(x)
    x += 1


message = 'hello'
name = ''
while name != 'bob':
    name = input('Name: ')  # expects user input in the console
    print(f'{message} {name}')


#  FOR LOOP
student = ['bob', 'sue', 'tim', 'phil']
for x in student:
    print(f'Hello, {x.capitalize()}!')


# IF / ELIF / ELSE   STATEMENTS
teen = 11
adult = 18
retired = 65
# while True:  # Infinite loop --- Exit with  CTRL + C   same as usual
while True:  # Infinite loop --- Exit with  CTRL + C   same as usual
    age = input('Your Age: ')  # Take input
    if (age == 'exit'): 
        break # A way to break out of the loop without the code breaking

    age = int(age)  # Convery to int

    if age < teen:
        print("You're a kid")
    elif age >= 11 and age < 18:
        print("You're a teen")
    elif age >= 18 and age < retired:
        print("You're an Adult")
    else:
        print("You're Old")


password = 'open potato'
while True:
    phrase = input('Password: ')
    if password in phrase.lower():
        print('You are right!!!')
        break
    else:
        print('You are Wrong. Try again.')


#  NESTED LOOPS
for x in range(1, 4):
    for y in range(1, 4):
        print(f'{x} * {y} = {x * y}')


#  BREAK / CONTINUE
for x in range(1, 11):
    if x == 5:
        break
    print(x)

for x in range(1, 11):
    if x == 5:
        continue
    print(x)

#  PASS - DO NOTHING (A placeholder for future code) - Execution will continue in the current iteration
for x in range(1, 11):
    if x == 5:
        pass
    print(x)


#  PASS / BREAK / CONTINUE
for x in range(1, 11):
    if x == 5:
        pass
    print(x)
    if x == 8:
        break
    print(x)
    if x == 10:
        continue
