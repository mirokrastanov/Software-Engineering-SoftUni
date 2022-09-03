student_name = input()
yearly_grade = float(input())
year = 1
fail_counter = 0
total_sum = 0
gpa = 0

while year <= 12:
    total_sum += yearly_grade
    if yearly_grade < 4 and fail_counter < 1:
        fail_counter += 1
    elif yearly_grade < 4 and fail_counter >= 1:
        print(f"{student_name} has been excluded at {year - 1} grade")
        break
    gpa = total_sum / year
    if year == 12:
        print(f"{student_name} graduated. Average grade: {gpa:.2f}")
        break
    year += 1
    yearly_grade = float(input())
