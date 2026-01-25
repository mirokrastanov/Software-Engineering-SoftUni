# A SIMPLE UP/DOWN DASHBOARD TESTING IF HOSTS ARE REACHABLE

import os
# import subprocess  # (for real world scenarios)

import time

# command = 'ping -c 1' # for Linux & Mac
command = 'ping -n 1'  # for Windows

host = ['cnn.com', 'fox.com', 'tacobell.com']

update_interval = 5
counter = 0

# The refresh tag forces a browser refresh
refresh_tag = f'<meta http-equiv="refresh" content="{update_interval}">'


while counter < 10:
    counter += 1
    page = f'''{counter < 10 and refresh_tag or ''}
<h1>Up/Down Dashboard</h1>
<h2>Updated: <b>{counter} {counter == 1 and 'time' or 'times'}</b></h2>
<h3><i> *updates every {update_interval == 1 and 'second' or f'{update_interval} seconds'}</i></h3>
'''
    for site in host:
        response = os.popen(f'{command} {site}').read()
        page += f'<pre>{response}</pre>'

    with open('.py_out/dashboard.htm', 'w') as file:
        file.write(page)

    # delays next iteration by 1 second
    time.sleep(update_interval)
