num_K = int(input())
num_L = int(input())
num_M = int(input())
num_N = int(input())

start1 = int(str(num_K) + str(8))
end1 = int(str(9) + str(num_L))
start2 = int(str(num_M) + str(8))
end2 = int(str(9) + str(num_N))

print(start1, end1, start2, end2)

# for i in range(start1 + 1, end1 + 1):
#     for j in range(start2 + 1, end2 + 1):
#         if i % 2 == 0 and j % 2 != 0 and i != j:
#             print(i, j)
