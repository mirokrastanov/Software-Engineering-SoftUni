nylon_needed = int(input())
paint_needed = int(input())
diluent = int(input())
hours_on_the_job = int(input())

nylon_total = (nylon_needed + 2) * 1.5
paint_total = paint_needed * 14.5 * 1.1
diluent_total = diluent * 5

total = nylon_total + paint_total + diluent_total + 0.4
workers_total = hours_on_the_job * (0.3 * total)
total += workers_total

print(total)
