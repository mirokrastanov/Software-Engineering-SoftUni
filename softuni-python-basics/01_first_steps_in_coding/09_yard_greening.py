sqm_for_greening = float(input())
greening_price = sqm_for_greening * 7.61
discount = 0.18 * greening_price
greening_price -= discount
print(f"The final price is: {greening_price} lv.")
print(f"The discount is: {discount} lv.")
