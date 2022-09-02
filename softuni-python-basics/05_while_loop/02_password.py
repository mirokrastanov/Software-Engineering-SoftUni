username = input()
password = input()
command = input()
while True:
    current_password = command
    if current_password == password:
        print(f"Welcome {username}!")
        break
    command = input()
