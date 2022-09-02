age = int(input())
washer_price = float(input())
toy_price_per = int(input())
toy_counter = 0
money_increase_step = 10
money_saved = 0

for year in range(1, age+1):
    if year % 2 != 0:
        toy_counter += 1
    else:
        money_saved += money_increase_step
        money_increase_step += 10
        money_saved -= 1
toys_value = toy_counter * toy_price_per
money_saved += toys_value

if money_saved >= washer_price:
    print(f"Yes! {(money_saved - washer_price):.2f}")
else:
    print(f"No! {(washer_price - money_saved):.2f}")
