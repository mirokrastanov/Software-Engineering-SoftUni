student_name = input()
year = 0
fail_counter = 0
total_sum = 0
gpa = 0

while year <= 12:
    yearly_grade = float(input())
    year += 1
    if yearly_grade < 4:
        fail_counter += 1
        if fail_counter == 2:
            print(f"{student_name} has been excluded at {year} grade")
            break
        year -= 1
    else:
        total_sum += yearly_grade
    if year == 12:
        gpa = total_sum / 12
        print(f"{student_name} graduated. Average grade: {gpa:.2f}")
        break
