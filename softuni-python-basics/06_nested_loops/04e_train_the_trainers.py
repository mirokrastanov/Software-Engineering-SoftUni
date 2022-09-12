jury_count = int(input())
command = input()
total_grade_counter = 0
total_grade_sum = 0

while command != "Finish":
    presentation_name = command
    avg_grade = 0
    for grade in range(jury_count):
        current_grade = float(input())
        avg_grade += current_grade
        total_grade_counter += 1
        total_grade_sum += current_grade
    avg_grade /= jury_count
    print(f"{presentation_name} - {avg_grade:.2f}.")
    command = input()
print(f"Student's final assessment is {(total_grade_sum / total_grade_counter):.2f}.")
