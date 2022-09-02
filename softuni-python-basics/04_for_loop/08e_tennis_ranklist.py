from math import floor

tournaments = int(input())
initial_pts = int(input())
total_pts = initial_pts
wins = 0

for _ in range(tournaments):
    current_pos = input()
    if current_pos == "W":
        total_pts += 2000
        wins += 1
    elif current_pos == "F":
        total_pts += 1200
    elif current_pos == "SF":
        total_pts += 720
print(f"Final points: {total_pts}")
print(f"Average points: {floor((total_pts - initial_pts) / tournaments)}")
print(f"{(wins / tournaments * 100):.2f}%")
