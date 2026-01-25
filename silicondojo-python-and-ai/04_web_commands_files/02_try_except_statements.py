import requests
import json

# IP Geolocation API - if no query, it uses your current IP
url = 'http://ip-api.com/json/'

# Forces an error
# url = 'http://ip--api.com/json/'


# (try/except in Python) is similar to (try/catch in JS)
try:
    response = requests.get(url).json()
    print(response['city'])

except Exception as e:
    print('EXCEPT runs when the TRY fails')
    print(e)  # When we need the error object/class
    print(type(e))
except:
    print('EXCEPT runs when the TRY fails')
    print('There was an error')  # When we don't need the error object
else:
    # counterintuitive, but that's how it works
    print('ELSE runs when the TRY works !!!')
finally:
    print('FINALLY always runs')


#  TRY and EXCEPT  are  required
# ELSE and FINALLY are  optional
