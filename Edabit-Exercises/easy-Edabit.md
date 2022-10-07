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
  4. Left Shift by Powers of Two 
The left shift operation is similar to multiplication by powers of two.
Sample calculation using the left shift operator (<<):
10 << 3 = 10 * 2^3 = 10 * 8 = 80
-32 << 2 = -32 * 2^2 = -32 * 4 = -128
5 << 2 = 5 * 2^2 = 5 * 4 = 20

Write a function that mimics (without the use of <<) the left shift operator and returns the result from the two given integers.
Examples
shiftToLeft(5, 2) ➞ 20
shiftToLeft(10, 3) ➞ 80
shiftToLeft(-32, 2) ➞ -128
shiftToLeft(-6, 5) ➞ -192
shiftToLeft(12, 4) ➞ 192
shiftToLeft(46, 6) ➞ 2944

Notes
    There will be no negative values for the second parameter y.
    This challenge is more like recreating of the left shift operation, thus, the use of the operator directly is prohibited.
    Alternatively, you can solve this challenge via recursion.
    A recursive version of this challenge can be found via this link.
  -----------------------------------------
5.Find the Smallest and Biggest Numbers

Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

Examples
minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
minMax([2334454, 5]) ➞ [5, 2334454]
minMax([1]) ➞ [1, 1]
Notes
All test arrays will have at least one element and are valid.
  -----------------------------------------
6.Is it Time for Milk and Cookies?

Christmas Eve is almost upon us, so naturally we need to prepare some milk and cookies for Santa! Create a function that accepts a Date object and returns true if it's Christmas Eve (December 24th) and false otherwise. Keep in mind JavaScript's Date month is 0 based, meaning December is the 11th month while January is 0.

Examples
timeForMilkAndCookies(new Date(2013, 11, 24)) ➞ true
timeForMilkAndCookies(new Date(2013, 0, 23)) ➞ false
timeForMilkAndCookies(new Date(3000, 11, 24)) ➞ true

Notes
    Dates are zero zero based (see resources).
    All test cases contain valid dates.
  -----------------------------------------
  -----------------------------------------
  -----------------------------------------
  -----------------------------------------
  -----------------------------------------
