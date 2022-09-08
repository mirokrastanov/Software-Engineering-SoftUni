target_steps = 10000
daily_steps = 0
command = input()
goal_reached = False

while command != "Going home":
    new_steps = int(command)
    daily_steps += new_steps
    if daily_steps >= target_steps:
        goal_reached = True
        break
    command = input()
if command == "Going home":
    new_steps = int(input())
    daily_steps += new_steps
if daily_steps >= target_steps or goal_reached:
    print("Goal reached! Good job!")
    print(f"{(daily_steps - target_steps):.0f} steps over the goal!")
else:
    print(f"{(target_steps - daily_steps):.0f} more steps to reach goal.")
