from ollama import chat, ChatResponse

# fmt: off   ---  Check if a value is a primitive
primitives = (bool, str, int, float, type(None))
def is_primitive(obj):
    return isinstance(obj, primitives)
# fmt: on


# Define Chat Parameters
model = 'granite4:1b'
messages = [
    {'role': 'user', 'content': 'What is the purpose of rubber ducks?'},
]
response: ChatResponse = chat(model, messages)

# fmt: off   --- Print Response (using recursion)
def print_response(data, level=0):
    prefix = " " + ">" * level if level > 0 else ""
    items = data.items() if hasattr(data, 'items') else data

    for key, value in items:
        if is_primitive(value):
            print(f"{prefix} {key} -- {value}")
        else:
            print(f"{prefix} {key}:")
            print_response(value, level + 1)  # recursive call

print_response(response)
# fmt: on
