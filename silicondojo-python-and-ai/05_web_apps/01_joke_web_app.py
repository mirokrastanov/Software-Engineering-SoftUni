import requests
import json

url = 'https://official-joke-api.appspot.com/random_joke'

response = requests.get(url).json()

# Type: dict (object)
# response = requests.get(url).json()
# print(f'Response dict: {response}')

# for key, value in response.items():
#     print(f'{key} -- {value}')

# Type: str
formatted_res = json.dumps(response, indent=2)
print(f'Response str: {formatted_res}')


print(response['setup'])
print(response['punchline'])

with open('.py_out/joke.html', 'w') as file:
    file.write('<h1>Joke Web App</h1>')
    file.write(f'<p>{response['setup']}</p>')
    file.write(f'<hr>')
    file.write(f'<p>{response['punchline']}</p>')
