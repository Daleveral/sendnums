import random
import os

def get_randoms():
    numbers = list(range(1, 16))
    random.shuffle(numbers)
    return numbers

def output(numbers):
    toprint = []
    for _ in range(5):
        toprint.append(numbers.pop(0))
    print('\n ',*sorted(toprint))

numbers = get_randoms()
os.system('cls' if os.name == 'nt' else 'clear')
for _ in range(3):
    input("  回车发牌 !")
    output(numbers)
    input("\n  记住了 ?  回车吧 !  ")
    os.system('cls' if os.name == 'nt' else 'clear')