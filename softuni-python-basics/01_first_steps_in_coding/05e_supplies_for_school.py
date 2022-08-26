pen_quantity = int(input())
sharpey_quantity = int(input())
board_detergent = int(input())
discount = int(input()) / 100

pen_total = pen_quantity * 5.8
sharpey_total = sharpey_quantity * 7.2
detergent_total = board_detergent * 1.2

net_total = pen_total + sharpey_total + detergent_total
discount *= net_total
net_total -= discount

print(net_total)