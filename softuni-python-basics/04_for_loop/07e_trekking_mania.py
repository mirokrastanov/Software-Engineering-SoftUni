climber_groups = int(input())
musala = 0
monblanc = 0
kili = 0
k2 = 0
everest = 0
total_climbers = 0

for group in range(climber_groups):
    current_group = int(input())
    total_climbers += current_group
    if current_group <= 5:
        musala += current_group
    elif current_group <= 12:
        monblanc += current_group
    elif current_group <= 25:
        kili += current_group
    elif current_group <= 40:
        k2 += current_group
    else:
        everest += current_group

print(f"{(musala / total_climbers * 100):.2f}%")
print(f"{(monblanc / total_climbers * 100):.2f}%")
print(f"{(kili / total_climbers * 100):.2f}%")
print(f"{(k2 / total_climbers * 100):.2f}%")
print(f"{(everest / total_climbers * 100):.2f}%")
