# GuessTheNumber
A simple console-based JavaScript Number Guessing Game.
<p align="center"><img src="https://raw.githubusercontent.com/mirokrastanov/Software-Engineering-SoftUni/main/miscellaneous/guess%20the%20num%20logo.png" alt="game-image" height="400px"></p>

## Description
The computer select a random number between 0 and 100. Then the player has to guess what that number is. After each failed attempt the game slows a clue to help the player until they manage to guess the right number.
<br />

## Input & Output
  - The expected **valid input is a number between 0 - 100.**
  - The output indicates whether the number was guessed or not and shows a clue if the guessing failed.
<br />


## Game Logic | Possible Scenarios
**For example the computer has chosen the number 55.** This is hidden from the user. 
|YOUR INPUT|OUTCOME|COLOR|
| :--: | :--: | :--: |
|empty input/nothing|"You've submitted an empty input! Please type a number!"| Yellow |
|a space/s|"Your input -->  --> is not a number! Please type a number!"| Yellow |
|banana|"Your input --> banana --> is not a number! Please type a number!"| Yellow |
|12|"Your answer --> 12 --> is too Low! Try again!"| Green |
|87|"Your answer --> 87 --> is too High! Try again!"| Red |
|55|"Correct!!! You guessed the number --> 55 <--"| Cyan |

Different outcomes are styled with a specific color to improve their visualization to the player. This should help the player in their next guess as every failed guess provides a colored hint relative to the next step the player must take.
  
<!--  
## Live Demo
[<img src="https://freepngimg.com/download/play_now_button/25403-5-play-now-button-transparent.png" alt="run-button" height="40px" />](https://replit.com/@mirokrastanov/RockPaperScissors-JS?v=1)
  
  
## [Source Code](rockPaperScissors.js)
  
  
  -->
