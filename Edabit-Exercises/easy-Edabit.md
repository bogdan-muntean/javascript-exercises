1.Bitwise Operations

A decimal number can be represented as a sequence of bits. To illustrate:
6 = 00000110
23 = 00010111

From the bitwise representation of numbers, we can calculate the bitwise AND, bitwise OR and bitwise XOR. Using the example above:
bitwiseAND(6, 23) ➞ 00000110
bitwiseOR(6, 23) ➞ 00010111
bitwiseXOR(6, 23) ➞ 00010001

Write three functions to calculate the bitwise AND, bitwise OR and bitwise XOR of two numbers.
Examples

bitwiseAND(7, 12) ➞ 4
bitwiseOR(7, 12) ➞ 15
bitwiseXOR(7, 12) ➞ 11

Resource:
a) AND                 &
b) OR                  |    
c) XOR (exclusive OR)  ^    (cand sunt diferiti, este 1)  0^1 = 1    0^0 = 0  1^1 = 0

*bitwise = bite processing
let binarCode = (400).toString(2)    - transforma in binar
let binarToInt = parseInt(binarCode) - transforma inapoi in integer

!! console.log(("110010").toString(8))  - octal
!! console.log(("110010").toString(10)) - integer (decimal)
!! console.log(("110010").toString(16)) - hexadecimal
  -----------------------------------------
2.Add up the Numbers from a Single Number

Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
Examples

addUp(4) ➞ 10
addUp(13) ➞ 91
addUp(600) ➞ 180300

Notes
Expect any positive number between 1 and 1000.

  ----------------------------------------
  https://edabit.com/challenge/tYHkTdFrEmWfxpPKF
3. Matchstick Houses
This challenge will help you interpret mathematical relationships both algebraically and geometrically.

Matchstick Houses, Steps 1, 2 and 3

Create a function that takes a number (step) as an argument and returns the number of matchsticks in that step. See step 1, 2 and 3 in the image above.
Examples

matchHouses(1) ➞ 6
matchHouses(4) ➞ 21
matchHouses(87) ➞ 436

Notes
    Step 0 returns 0 matchsticks.
    The input (step) will always be a non-negative integer.
    Think of the input (step) as the total number of houses that have been connected together.

  -----------------------------------------
  -----------------------------------------
  -----------------------------------------
  -----------------------------------------
  -----------------------------------------
  -----------------------------------------
  -----------------------------------------
  -----------------------------------------
