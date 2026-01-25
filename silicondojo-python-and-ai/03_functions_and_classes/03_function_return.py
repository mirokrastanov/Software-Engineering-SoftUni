def hello(phrase, name):
    response = f'{phrase} {name}'
    return response


greeting = 'Howdy'
person = 'Bob'

response = hello(greeting, person)

print(response)
