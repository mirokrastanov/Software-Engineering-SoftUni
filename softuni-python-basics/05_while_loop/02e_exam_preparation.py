bad_grade_limit = int(input())
bad_grade_counter = 0
total_grade_sum = 0
grade_counter = 0
command = input()
need_break = False
last_problem = ""

while command != "Enough":
    problem_name = command
    last_problem = problem_name
    problem_grade = int(input())
    grade_counter += 1
    total_grade_sum += problem_grade
    if problem_grade <= 4:
        bad_grade_counter += 1
    if bad_grade_counter >= bad_grade_limit:
        print(f"You need a break, {bad_grade_counter} poor grades.")
        need_break = True
        break
    command = input()

if not need_break:
    average_grade = total_grade_sum / grade_counter
    print(f"Average score: {average_grade:.2f}")
    print(f"Number of problems: {grade_counter}")
    print(f"Last problem: {last_problem}")
