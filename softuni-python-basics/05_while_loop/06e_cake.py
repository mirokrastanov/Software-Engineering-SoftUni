cake_width = int(input())
cake_length = int(input())
cake_pieces = round(cake_length * cake_width)
pieces_left = cake_pieces
command = input()

while command != "STOP":
    pieces_taken = int(command)
    if pieces_left - pieces_taken <= 0:
        diff = abs(pieces_left - pieces_taken)
        print(f"No more cake left! You need {diff} pieces more.")
        break
    pieces_left -= pieces_taken
    command = input()
if command == "STOP":
    print(f"{pieces_left} pieces are left.")
