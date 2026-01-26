import datetime

while True:
    title = input('Title: ')
    note = input('Note: ')
    time = datetime.datetime.now()

    with open('.py_out/data.csv', 'a') as file:  # append
        file.write(f'{title}|{time}|{note}\n')

    with open('.py_out/data.csv', 'r') as file:  # read
        records = file.readlines()

    print(records)
    records.sort(reverse=True)

    with open('.py_out/journal.htm', 'w') as file:  # write
        file.write('<h1>Journal App</h1>')

    for line in records:
        note = line.split('|')

        with open('.py_out/journal.htm', 'a') as file:  # append
            file.write(f'<h2>{note[0]}</h2>')
            file.write(f'<strong>{note[1]}</strong>')
            file.write(f'<p>{note[2]}</p>')
