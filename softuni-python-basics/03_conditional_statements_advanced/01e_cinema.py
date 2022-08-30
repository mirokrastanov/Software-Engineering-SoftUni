screening_type = input()
rows = int(input())
columns = int(input())
price_per = 0

if screening_type == "Premiere":
    price_per = 12
elif screening_type == "Normal":
    price_per = 7.5
elif screening_type == "Discount":
    price_per = 5

earnings = price_per * rows * columns
print(f"{earnings:.2f} leva")


