from ollama import chat
from ollama import ChatResponse
import os
import requests


def geo():
    url = 'http://ip-api.com/json/'
    response = requests.get(url).json()
    return response


def ai(query, location, memory):
    injection = 'Answer in under 20 words'
    query = f'''Follow these instructions: {injection}
                I am located here: {location}
                This is our conversation up until now: {memory}
                This is my question: {query}'''
    response: ChatResponse = chat(model='granite4:1b', messages=[
        {
            'role': 'user',
            'content': query,
        },
    ])
    return response.message.content


location = geo()

with open('.py_out/memory.txt', 'w') as file:  # write
    file.write('This is the conversation we have had\n\n')

while True:
    query = input('Query: ')
    if query == 'q' or query == 'quit' or query == 'exit' or query == '/exit':
        break

    with open('.py_out/memory.txt', 'r') as file:  # read
        memory = file.read()

    response = ai(query, location, memory)
    os.system('cls')  # Clear the console   |   'clear' on Linux & Mac

    print(query)
    print(response)

    with open('.py_out/memory.txt', 'a') as file:  # append
        file.write(f'My Query: {query}\n')
        file.write(f'Your Response: {response}\n\n')
