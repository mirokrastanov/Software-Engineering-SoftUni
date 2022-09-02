actor_name = input()
academy_pts = float(input())
judge_count = int(input())
total_pts = academy_pts
nominee = False

for judge in range(judge_count):
    judge_name = input()
    judge_pts = float(input())
    total_pts += (judge_pts * len(judge_name) / 2)
    if total_pts >= 1250.5:
        nominee = True
        break
if nominee:
    print(f"Congratulations, {actor_name} got a nominee for leading role with {total_pts:.1f}!")
else:
    print(f"Sorry, {actor_name} you need {(1250.5 - total_pts):.1f} more!")

