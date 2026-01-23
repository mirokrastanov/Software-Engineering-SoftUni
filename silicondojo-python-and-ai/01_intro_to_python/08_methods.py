name = 'bOb'
attendance = 'bob,sue,tim,pam,tim'

print(name.lower()) # Lowercases all letters
print(name.upper()) # Capitalizes all letters
print(name.title()) # Capitalize the first letter of each word

print(attendance)
attendance = attendance.split(',') # Splits the String '' into a List []
print(attendance)


# Output 
# bob
# BOB
# Bob
# bob,sue,tim,pam,tim
# ['bob', 'sue', 'tim', 'pam', 'tim']
