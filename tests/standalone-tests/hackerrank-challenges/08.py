s = int(input())
n = int(input())
a = []
for i in range(n):
    a.append(int(input()))


def min_in_segment(start, end, prev, s, prev_min):
    if s == 1:
        return a[start]
    else:
        if prev == -1 or prev_min == -2:
            return min(a[start:end+1])
        elif prev_min != -2:
            if prev != prev_min:
                return a[end]
