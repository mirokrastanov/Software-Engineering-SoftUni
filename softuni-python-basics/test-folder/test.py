book_needed = input()
book_checked = input()
book_counter = 0

while book_checked != "No More Books":
    if book_checked == book_needed:
        print(f"You checked {book_counter} books and found it.")
        break
    else:
        book_counter += 1
    book_checked = input()

if book_checked == "No More Books":
    print("The book you search is not here!")
    print(f"You checked {book_counter} books.")
