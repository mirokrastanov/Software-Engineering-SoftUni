# softuni-JS-Basics

### Final Exam - Submitted Solutions
### Score: 6.00/6.00 


# Problem 1. Mining Rig
Donald wants to build a computer rig for crypto mining. In order to do that he needs to buy GPUs, but first he needs to calculate how long until he returns his investment. He also needs to account for the price of electricity. For the rig he would like to buy 13 GPUs and 13 adapters, while the other components he will get second hand for a total of 1000 leva.

Write a program that calculates how long until his investment is returned (rounded to the closest greater integer) as well as how much money he would have to invest initially.
<br>
## Input:
4 lines are being read from the console:
- 1st line: **Price per single GPU** (number)
- 2nd line: **Price per single adapter** (number)
- 3rd line: **Electricity cost per day for a single GPU** (number)
- 4th line: **Earnings per single GPU per day** (number)
<br>
## Expected Output:
Print 2 lines on the console:
- **Total Cost for the rig**
- **Investment return - days needed (rounded to the closest greater integer)**

<br>
# Problem 2. Spaceship
George needs to build a spaceship for his crew. In order to do that he needs to account for a special condition. The spaceship needs to be able to fit at least 3 astronauts, but not more than 10. Each astronaut needs a small room. Dimensions: width 2m; length 2m; height, which is 40cm more than the average height of the astronauts.

Write a program that calculates the volume of the ship as well as how many astronauts it would fit and at the end prints out whether the ship is big enough.
<br>
## Input:  
4 lines are being read from the console:
- 1st line: **width of the ship** (number)
- 2nd line: **length of the ship** (number)
- 3rd line: **height of the ship** (number)
- 4th line: **average astronaut height** (number)
<br>
## Expected Output:
Print the following, depending on the set conditions:
- If the astronauts are between [3; 10] print this:
"**The spacecraft holds {astronauts count} astronauts.**"
- If the astronauts are fewer than 3:
"**The spacecraft is too small.**"
- If the astronauts are more than 10:
"**The spacecraft is too big.**"

<br>
# Problem 3. Computer Room
In the biggest computer room in Bulgaria prices vary due to the high attendance. They vary based on whether people attend during the day or during the night and also based on the current month in which they attend. Prices are as follows:
<table>
  <tr>
    <th></th>
    <th>March - May</th>
    <th>June - August</th>
  </tr>
  <tr>
    <td>Day</td>
    <td>10.50 lv/h</td>
    <td>12.60 lv/h</td>
  </tr>
  <tr>
    <td>Night</td>
    <td>8.40 lv/h</td>
    <td>10.20 lv/h</td>
  </tr>
</table>
Discounts are also applicable as follows:
- For a group of 4 or more - the price per person is reduced by 10%
- For 5 or more hours spent in the vicinity - the price per person is reduced by 50%

Write a program that calculates the price per person per hour and the total sum of their expence.
<br>
## Input:  
4 lines are being read from the console:
- 1st line: **month of visit** (string)
- 2nd line: **hours spent inside** (number)
- 3rd line: **people in the group** (number)
- 4th line: **visit time - day or night** (string)
<br>
## Expected Output:
Print out 2 lines on the console:
- "**Price per person for one hour: {price per person per hour}**"
- "**Total cost of the visit: {total cost}**"
Format the resulting amounts to the 2nd decimal.

<br>
# Problem 4. Gifts from Santa
Santa Klaus begins his tour from town to town in order to bring presents to all the well behaved children. He asks you to write a program which prints out all of the addresses between "m" and "n", which when divided both by 2 and by 3 leave no remainder, because Santa Klaus knows that only well behaved children live at those addresses. "m" and "n" are being read from the console, as well as one other number "s", which represents the an address number in between "m" and "n". 
<br>
## Input:
3 lines are being read from the console:
- **n** (integer) - while "n" is within the interval: (0 <= n < m)
- **m** (integer) - while "m" is within the interval: (n < m <= 10000)
- **s** (integer) - while "s" is within the interval: (n <= s <= m)
<br>
## Expected Output:
If one of the addresses between "m" and "n" divisible by 2 and 3 without remainder, matches the address number "s" then:
- **The program should finish. All prior addresses need to be printed. The address "s" should NOT be printed.** 
Otherwise the console should print all of the addresses within the set criteria:
For Input 1:
- **30 24 18 12 6**
For Input 2:
- **36 30 24 18**
For Input 3:
- **996 990 984 978... 54 48 42** (shortened)

<br>
# Problem 5. Puppy Care
Annie finds a puppy and decides to take care of it, until she has found someone to adopt it. The puppy eats a certain amount of food each day.
Write a program that calculates whether the food bought by Annie for the puppy would be enough until it is adopted.
<br>
## Input: 
2 lines are being read from the console:
- 1st line: **Food bought by Annie, in kg.** (integer)
- on every other line following, until the console reads **"Adopted"**: 
**Food eaten by the puppy daily, in grams.** (integer)
<br>
## Expected Output:
Print only one line:
- If the food is enough:
**Food is enough! Leftovers: {food left} grams.**
- If the food is not enough:
**Food is not enough. You need {extra food needed} grams more.**

<br>
#Problem 6. Gold Mine
A group of enthusiasts travel to locations with gold mines. You need to write a program to help them determine whether a location will provide the expected daily yield.
You know the number of locations, the expected average yield per day per location and for each day you would receive the actual daily yield. 
<br>
## Input:
- 1st line: **locations count** (integer)
After that for each location:
- 1st line: **expected daily average yield** (integer)
- 2nd line: **days spent at the location** (integer)
And after that for each day at the location:
- 1st line: **actual daily yield** (integer)
<br>
## Expected Output:
After the digging at one location has finished, print 1 line depending on which condition is met:
If the actual average daily yield has reached or surpassed the expected one print the following:
- "**Good job! Average gold per day: {actual daily average yield}**"
If the actual daily yield is lower than the expected one print the following: 
- "**You need {gold still needed to reach the expected average daily yield} gold.**"
Format the results to the 2nd decimal.


