length = int(input()) / 10
width = int(input()) / 10
height = int(input()) / 10
percent = float(input()) / 100

volume = length * width * height
volume -= (volume * percent)

print(volume)
