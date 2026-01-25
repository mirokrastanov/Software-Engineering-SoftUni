# TO READ/WRITE A FILE

# When you open a file you can use multiple modes
# • w – create or overwrite a file
# • a – append to a file
# • r – read from a file
# • wb, ab, rb – the b is for binary and is used when dealing with multimedia file.

# ( with open() as file: ) - automatically closes the file after the code block ends


# WRITE A FILE
with open('.py_out/file.txt', 'w') as file:
    file.write('hello world')

# READ A FILE
with open('.py_out/file.txt', 'r') as file:
    text = file.read()
    print(text)
