import os
# import subprocess  # (for real world scenarios)

# command = 'ping -c 1' # for Linux & Mac
command = 'ping -n 1'  # for Windows


def ping(host):
    response = os.popen(f'{command} {host}').read()
    return response


while True:
    host = input('Host to Ping (or type q to quit): ')
    if not host or host == 'q':
        print('Quitting...')
        break
    response = ping(host)
    print(response)
