# Most Common:    List [] = Array [] | Dictionary {} = Object {}    (almost the same thing)

# Types of Collections
# NAME          | SYNTAX   |  Ordered | Mutable | Duplicates | JS Equivalent   |  USAGE
# Lists         | list  [] | ✅Yes    | ✅Yes  | ✅Yes      | Array           | Very Common (JS Array)
# Tuples        | tuple () | ✅Yes    | ❌No   | ✅Yes      | readonly Array  | Specific Use
# Sets          | set   {} | ❌No     | ✅Yes  | ❌No       | Set             | Specific Use
# Dictionaries  | dict  {} | ✅(keys) | ✅Yes  | ❌keys     | Map (or Object) | Very Common (JS Object)

# readonly Array - Object.freeze() in JS or readonly in TS
# Map (or Object) - Map is closer, because key order is kept

# Ordered - Adding a value will add it to the end of the list
# Mutable - Can be changed
# Duplicates - Can have duplicates of the same value

# LIST (JS: Array) - Ordered, Mutable, Can Have Duplicates
list = [1, 2, 2, 2, 2, 2, 2, 3, 4, 5]
print('>1> list: [1, 2, 2, 2, 2, 2, 2, 3, 4, 5]')
print('>2> list:', list)
# Adding a number to a list via .append() does guarantee the item will go to the end (like arrays in JS)

# TUPLE (JS: readonly Array) - Immutable
tuple = (1, 2, 2, 2, 3, 4, 5)
print('>1> tuple: (1, 2, 2, 2, 3, 4, 5)')
print('>2> tuple:', tuple)

# SET (JS: Set) - Unordered, No Duplicates = UNIQUE ELEMENTS
set = {1, 2, 2, 2, 2, 3, 4, 5}
print('>1> set: {1, 2, 2, 2, 2, 3, 4, 5}')
print('>2> set:', set, '------- <only first occurrence of a value is kept>')
# Adding a number to a Set via .add() does no guarantee where the number(item) will go

# DICTIONARY (JS: Map/Object) - Ordered by Keys, No Duplicate Keys
dictionary = {'name': 'bob', 'age': 12, 'size': 'small'}
print('>1> dictionary: {"name": "bob", "age": 12, "size": "small"}')
print('>2> dictionary:', dictionary)


# Accessing Collections
print(list[0])
print(dictionary['name'])


# Modifying Collections | ADD / REMOVE
print('>3>', list, dictionary)

list.append(6)  # Add Item To The End
list.pop()  # Remove Last Item
list.pop(2)  # Remove Item At Specific Index


dictionary['height'] = 150  # Create or Update Key-Value pair (if key exists)
dictionary['hair'] = 'brown'  # Same as above
del dictionary['hair']  # Delete Key-Value pair
dictionary['height'] = 180  # Update Value

print('>4>', list, '""', dictionary)
