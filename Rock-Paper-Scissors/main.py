import random

rock = '''
---_____
---' ___)
    (____)
    (____)
    (___)
----(__)
'''

paper = '''
--- ______
---'   ___)_____
          ______)
          _______)
          _______)
---___________)
'''

scissors = '''
--- ______
---'   ___)_____
          ______)
       __________)
      (____)
---___(___)
'''

game_images = [rock, paper, scissors]
user_choice = int(input("What do you choose? Type 0 for Rock, 1 for Paper or 2 for Scissors.\n"))
computer_choice = random.randint(0, 2)

if user_choice < 0 or user_choice > 2:
    print("Invalid input. You lose!")
else:
    print(game_images[user_choice])
    print(f"Computer chose:\n{game_images[computer_choice]}")

    if user_choice < computer_choice:
        if user_choice == 0 and computer_choice == 2:
            print("You won!")
        else:
            print("You lose!")
    elif user_choice > computer_choice:
        if user_choice == 2 and computer_choice == 0:
            print("You lose!")
        else:
            print("You won!")
    else:
        print("Tie!")