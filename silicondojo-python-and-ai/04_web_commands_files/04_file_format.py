
# WRITE A FILE (creates it if it doesn't exist)
with open('file.txt', 'w') as file:
    file.write('hello world\n this is using ASCII formatting.\n slash n gives you a new line.\n \t t gives \t you \t tabbed spaces')


# READ A FILE and print its contents
with open('file.txt', 'r') as file:
    text = file.read()
    print(text)
