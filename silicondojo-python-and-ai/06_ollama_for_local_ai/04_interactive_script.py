from ollama import chat
from ollama import ChatResponse
import os


def ai(query):
    injection = 'Answer in under 20 words'
    query = f'{injection} -- {query}'
    response: ChatResponse = chat(
        model='granite4:1b',
        messages=[
            {'role': 'user', 'content': query},
        ])
    return response.message.content


while True:
    query = input('Query: ')
    if query == 'q' or query == 'quit' or query == 'exit' or query == '/exit':
        break

    response = ai(query)
    os.system('cls')  # Clear the console   |   'clear' on Linux & Mac
    
    print(query)
    print(response)
