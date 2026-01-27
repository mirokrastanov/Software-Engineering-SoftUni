from ollama import chat, ChatResponse

# fmt: off   ---  Check if a value is a primitive
primitives = (bool, str, int, float, type(None))
def is_primitive(obj):
    return isinstance(obj, primitives)
# fmt: on


# Define Chat Parameters
model = 'granite4:1b'
messages = [
    {'role': 'user', 'content': 'What is the meaning of life?'},
]
response: ChatResponse = chat(model, messages)

# Print Response
for key, value in response:
    primitive_value = is_primitive(value)

    if primitive_value:
        print(f'{key} -- {value}')
    else:
        print(f'{key}:')
        for k, v in value:
            print(f' > {k} -- {v}')
