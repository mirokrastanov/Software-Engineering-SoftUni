import requests  # python -m pip install requests
import json  # core module

# IP Geolocation API - if no query, it uses your current IP
# query = ''
# url = f'http://ip-api.com/json/{query}'

url = 'http://ip-api.com/json/'

# Type: dict (object)
response = requests.get(url).json()
print(f'Response dict: {response}')


for key, value in response.items():
    print(f'{key} -- {value}')

# Type: str
formatted_res = json.dumps(response, indent=2)
print(f'Response str: {formatted_res}')


print(f'You Are In This City: {response['city']}')
