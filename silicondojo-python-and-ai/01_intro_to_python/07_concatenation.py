message = 'hello'
name = 'bob'


# f-string (template literal in JS)
print(f'{message} you are logged in as: {name}!!!')
# Output: hello world!!!

print((message)+(name)+('!!!'))
# Output: helloworld!!!

print((message), (name), ('!!!'))
# Output: hello world !!!


# Triple '''text''' acts as `text` in JS (multi-line string)
new_message = '''This is
  Multiple Lines
    of text'''

print(new_message)
