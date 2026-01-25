def hello(name):
    welcome = f'hello {name}'
    leave = f'goodbye {name}'
    future = f'come again {name}'
    return welcome, leave, future


person = 'Bob'

response = hello(person)

print(type(response))
print(response)
print(response[0])
print(response[1])
print(response[2])
