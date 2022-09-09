destination = input()

while destination != "End":
    budget_req = float(input())
    money_saved = 0
    going_to = False
    while money_saved < budget_req:
        deposit = float(input())
        money_saved += deposit
        if money_saved >= budget_req:
            going_to = True
    if going_to:
        print(f"Going to {destination}!")
    destination = input()
