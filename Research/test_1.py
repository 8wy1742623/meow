def get_s(h):
    # s = 0
    # t = 0.02
    # a = h / 0.09
    # 累计长度 s
    s = 0
    for n in range(1, int(0.3 / 0.02)):
        step = (0.5 * h / 0.09) * (0.02 * 0.02) * (n * n - (n - 1) * (n - 1))
        s += step
        print()
        print("第 %s 段 step 的长度： %s" % (str(n), str(step)))
        print("已经走过的总路程： %s" % str(s))

get_s(200)
