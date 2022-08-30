city = input()
sales = float(input())
commission_rate = 0
valid = True

if city == "Sofia":
    if 0 <= sales <= 500:
        commission_rate = 0.05
    elif 500 < sales <= 1000:
        commission_rate = 0.07
    elif 1000 < sales <= 10000:
        commission_rate = 0.08
    elif sales > 10000:
        commission_rate = 0.12
    else:
        valid = False
elif city == "Varna":
    if 0 <= sales <= 500:
        commission_rate = 0.045
    elif 500 < sales <= 1000:
        commission_rate = 0.075
    elif 1000 < sales <= 10000:
        commission_rate = 0.1
    elif sales > 10000:
        commission_rate = 0.13
    else:
        valid = False
elif city == "Plovdiv":
    if 0 <= sales <= 500:
        commission_rate = 0.055
    elif 500 < sales <= 1000:
        commission_rate = 0.08
    elif 1000 < sales <= 10000:
        commission_rate = 0.12
    elif sales > 10000:
        commission_rate = 0.145
    else:
        valid = False
else:
    valid = False

if not valid:
    print("error")
else:
    commission_value = sales * commission_rate
    print(f"{commission_value:.2f}")

