input_str = input()
vowel_sum = 0

for i in input_str:
    if i == "a":
        vowel_sum += 1
    elif i == "e":
        vowel_sum += 2
    elif i == "i":
        vowel_sum += 3
    elif i == "o":
        vowel_sum += 4
    elif i == "u":
        vowel_sum += 5
print(vowel_sum)
