open_browser_tabs = int(input())
salary_remaining = float(input())
salary_lost = False

for _ in range(open_browser_tabs):
    current_tab = input()
    if current_tab == "Facebook":
        salary_remaining -= 150
    elif current_tab == "Instagram":
        salary_remaining -= 100
    elif current_tab == "Reddit":
        salary_remaining -= 50
    if salary_remaining <= 0:
        salary_lost = True
        break
if salary_lost:
    print("You have lost your salary.")
else:
    print(f"{salary_remaining:.0f}")
