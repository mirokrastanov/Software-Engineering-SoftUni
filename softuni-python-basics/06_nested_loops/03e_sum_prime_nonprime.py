command = input()
prime_sum = 0
non_prime_sum = 0

while command != "stop":
    current_number = int(command)
    prime = True
    if current_number < 0:
        print("Number is negative.")
    else:
        for num in range(2, current_number):
            if current_number % num == 0:
                prime = False
                break
        if not prime:
            non_prime_sum += current_number
        else:
            prime_sum += current_number

    command = input()
print(f"Sum of all prime numbers is: {prime_sum}")
print(f"Sum of all non prime numbers is: {non_prime_sum}")
