from math import floor

player1 = int(input())
player2 = int(input())
player3 = int(input())

total_sec = player1 + player2 + player3

final_min = floor(total_sec / 60)
# instead of floor I can use // for whole num division = same result
final_sec = total_sec % 60

if final_sec < 10:
    print(f"{final_min}:0{final_sec}")
else:
    print(f"{final_min}:{final_sec}")

