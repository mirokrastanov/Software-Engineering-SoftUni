from ollama import chat, ChatResponse

response: ChatResponse = chat(model='granite4:1b', messages=[
    {
        'role': 'user',
        'content': 'Why is the sky blue?',
    },
])

# print(response['message']['content'])
print(response.message.content)
# print(response)
# print(type(response))
