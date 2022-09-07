trip_cost = float(input())
initial_budget = float(input())
current_budget = initial_budget
consequent_spending_days = 0
total_days = 0

while current_budget < trip_cost:
    transaction_type = input()
    transaction_amount = float(input())
    total_days += 1
    if transaction_type == "spend":
        current_budget -= transaction_amount
        consequent_spending_days += 1
    elif transaction_type == "save":
        current_budget += transaction_amount
        consequent_spending_days = 0
    if current_budget <= 0:
        current_budget = 0
    if consequent_spending_days >= 5:
        print("You can't save the money.")
        print(f"{total_days}")
        break
if current_budget >= trip_cost:
    print(f"You saved the money for {total_days} days.")
