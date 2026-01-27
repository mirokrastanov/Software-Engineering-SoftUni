# 1. Scrape a blod post
# 2. Create a new blog post with the scraped data
# 3. Append the new blog post to an HTML web page to create an autoblog

#   *For scraping:  python -m pip install beautifulsoup4

from ollama import chat
from ollama import ChatResponse
from bs4 import BeautifulSoup
import requests
import random
import sys
import time

# Prevents UnicodeDecodeError in the Console when encountering special symbols (non-ASCII characters)
sys.stdout.reconfigure(encoding='utf-8')


user_agent_list = [
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1.1 Safari/605.1.15',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:77.0) Gecko/20100101 Firefox/77.0',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:77.0) Gecko/20100101 Firefox/77.0',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36',
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36"
]


def gen_headers():
    return {
        "User-Agent": random.choice(user_agent_list)
    }


def scrape(url):

    # TO DO: Find a way to get around different security measures against bots

    page = requests.get(url, headers=gen_headers(), timeout=10).text
    print(f"Scraping {url}")

    if not page or "Just a moment" in page:
        print('Blocked by Cloudflare or other security measures!')
        return None
    else:
        soup = BeautifulSoup(page, 'html.parser')
        paragraphs = soup.find_all('p')
        print(f"Found {len(paragraphs)} paragraphs")
        page_text = ''
        for line in paragraphs:
            page_text += line.text
        return page_text


def post(query):
    response: ChatResponse = chat(model='granite4:1b', messages=[
        {'role': 'user', 'content': query},
    ])
    return response.message.content


def title(post):
    query = f'Create a 10 word Title for this post: {post}'
    response: ChatResponse = chat(model='granite4:1b', messages=[
        {'role': 'user', 'content': query},
    ])
    return response.message.content


initial_styles = {
    'body': '''font-family: 'Arial', sans-serif; background-color: #181818; color: #fff;''',
    'h1': '''background: #202020; padding: 10px 20px; border-radius: 10px; text-align: center; 
            margin: 10px auto; width: fit-content; border: 1px solid gray;''',
}
with open('.py_out/autoblog.htm', 'w', encoding='utf-8') as file:  # write
    file.write(f'''<body style="{initial_styles['body']}">\n<h1 style="{initial_styles['h1']}">AutoBlog</h1>
                <hr>\n<h2>Blog Posts</h2>\n</body>
               ''')

while True:
    url = input('URL: ')
    if url == 'q' or url == 'quit' or url == 'exit' or url == '/exit':
        break

    print('Scraping...')
    text = scrape(url)
    if text is None:
        print('Blocked! Please provide a different URL.')
        continue

    print(f'Text: {text[:200]}...')
    print('Generating...')
    query = f'''
            Write a 200 word blog post without a title, about this text: {text}
            '''

    response_post = post(query)
    response_title = title(text)

    print('*****')
    print(f'Title: {response_title}')
    print(f'Post: {response_post[:100]}...')
    print('*****')

    with open('.py_out/autoblog.htm', 'a', encoding='utf-8') as file:  # append
        file.write(f'<h3>{response_title}</h3>')
        file.write(f'<p>{response_post}</p>')
