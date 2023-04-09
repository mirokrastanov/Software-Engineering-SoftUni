from sys import maxsize

most_goals = -maxsize
best_player = ''
over_10 = False

player_name = input()

while player_name != 'END':
    player_goals = int(input())
    if player_goals >= 10:
        over_10 = True
        most_goals = player_goals
        best_player = player_name
        print(f'{best_player} is the best player!')
        if most_goals >= 3:
            print(f'He has scored {most_goals} goals and made a hat-trick !!!')
        else:
            print(f'He has scored {most_goals} goals.')
        break
    if player_goals > most_goals:
        most_goals = player_goals
        best_player = player_name
    player_name = input()

if not over_10:
    print(f'{best_player} is the best player!')
    if most_goals >= 3:
        print(f'He has scored {most_goals} goals and made a hat-trick !!!')
    else:
        print(f'He has scored {most_goals} goals.')
