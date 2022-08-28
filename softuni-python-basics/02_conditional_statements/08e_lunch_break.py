from math import ceil

show_name = input()
episode_duration = int(input())
break_duration = int(input())
lunch_duration = 1 / 8 * break_duration
relax_duration = 1 / 4 * break_duration
left_to_watch = break_duration - lunch_duration - relax_duration

if left_to_watch >= episode_duration:
    print(f"You have enough time to watch {show_name} and left with {ceil(left_to_watch - episode_duration)} minutes free time.")
else:
    print(f"You don't have enough time to watch {show_name}, you need {ceil(episode_duration - left_to_watch)} more minutes.")

