# RockPaperScissors
A simple console-based JavaScript implementation of the "Rock - Paper - Scissors" game.
<p align="center"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Rock-paper-scissors.svg/1200px-Rock-paper-scissors.svg.png" alt="game-image" height="400px"></p>

## Description
<a href="https://en.wikipedia.org/wiki/Rock_paper_scissors">Rock - Paper - Scissors</a> is a simple <b>two player game<b>, where you and your opponent (the computer) simultaneously choose one of the following three options: <b>"rock", "paper" or "scissors". The rules are as follows:
  - <b>Rock beats scissors</b> (the scissors get broken by the rock)
  - <b>Scissors beat paper</b> (the paper gets cut by the scissors) 
  - <b>Paper beats rock</b> (the rock gets covered by the paper)
The winner is the player whose choice beats the choice of his opponent. If both players choose the same option, the game ends with a draw.

## Input & Output
  - `rock` or `r`
  - `paper` or `p`
  - `scissors` or `s` <br />

The computer chooses a <b>random option</b>, then the <b>winner</b> is revealed.

## Game Logic | Possible Scenarios
  
|YOU|COMPUTER|OUTCOME|
| :--: | :--: | :--: |
|rock|rock|Draw|
|rock|paper|You lose|
|rock|scissors|You win|
|paper|rock|You win|
|paper|paper|Draw|
|paper|scissors|You lose|
|scissors|rock|You lose|
|scissors|paper|You win|
|scissors|scissors|Draw|
  
  
## Live Demo
[<img src="https://freepngimg.com/download/play_now_button/25403-5-play-now-button-transparent.png" alt="run-button" height="40px" />](https://replit.com/@mirokrastanov/RockPaperScissors-JS?v=1)
  
  
## [Source Code](rockPaperScissors.js)
  
  
  
