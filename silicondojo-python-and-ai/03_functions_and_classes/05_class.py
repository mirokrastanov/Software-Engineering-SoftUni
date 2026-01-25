# CamelCase naming convention

class Message():
    alert = 'hello world'

    def hello(name):
        print(f'Hello {name}')

    def bye(name):
        print('Bye')


person = 'Bob'

Message.hello(person)

print(Message.alert)


# class Person:
#     def __init__(self, name, age):
#         self.name = name
#         self.age = age
