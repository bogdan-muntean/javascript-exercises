1. How Much is True?

Create a function which returns the number of true values there are in an array.
Examples

countTrue([true, false, false, true, false]) ➞ 2
countTrue([false, false, false, false]) ➞ 0
countTrue([]) ➞ 0

Notes
Return 0 if given an empty array.
All array items are of the type bool (true or false).

  -------------------------------------------------
2. A Redundant Function
Write a function redundant that takes in a string str and returns a function that returns str.
Examples
const f1 = redundant("apple")
f1() ➞ "apple"

const f2 = redundant("pear")
f2() ➞ "pear"

const f3 = redundant("")
f3() ➞ ""

Notes
Your function should return a function, not a string.

  -------------------------------------------------
3. RegEx Exercise: An empty string

If you've completed this RegEx series from I to XXII then you have been exposed to all of MDN's documentation on regular expressions special characters. You can check my Collections under Basic Reg Ex in my profile if you missed any. This next part of the series is to help solidify what you've learned. In order to save time I will be searching the web to find regular expression exercises to post here.

You can test for empty string like this:
"".length === 0 ➞ true

Use a regular expression to test for an empty string.
const REGEXP = /your solution/
REGEXP.test("") ➞ true

  -------------------------------------------------
4. Tile Teamwork Tactics

In a board game, a piece may advance 1-6 tiles forward depending on the number rolled on a six-sided dice. If you advance your piece onto the same tile as another player's piece, both of you earn a bonus.

Can you reach your friend's tile number in the next roll? Create a function that takes your position a and your friend's position b and returns a boolean representation of whether it's possible to earn a bonus on any dice roll.

Examples
possibleBonus(3, 7) ➞ true
possibleBonus(1, 9) ➞ false
possibleBonus(5, 3) ➞ false

Notes
You cannot move backward (which is why example #3 doesn't work).
If you are already on the same tile, return false, as you would be advancing away.
Expect only positive integer inputs.

  -------------------------------------------------
5. Right Shift by Division
The right shift operation is similar to floor division by powers of two.
Sample calculation using the right shift operator ( >> ):

80 >> 3 = floor(80/2^3) = floor(80/8) = 10
-24 >> 2 = floor(-24/2^2) = floor(-24/4) = -6
-5 >> 1 = floor(-5/2^1) = floor(-5/2) = -3

Write a function that mimics (without the use of >>) the right shift operator and returns the result from the two given integers.

Examples
shiftToRight(80, 3) ➞ 10
shiftToRight(-24, 2) ➞ -6
shiftToRight(-5, 1) ➞ -3
shiftToRight(4666, 6) ➞ 72
shiftToRight(3777, 6) ➞ 59
shiftToRight(-512, 10) ➞ -1

Notes
  There will be no negative values for the second parameter y.
  This challenge is more like recreating of the right shift operation, thus, the use of the operator directly is prohibited.
  Alternatively, you can solve this challenge via recursion.
  A recursive version of this challenge can be found via this link.
  -------------------------------------------------
6. Perimeters with a Catch
Write a function that takes a number and returns the perimeter of either a circle or a square. The input will be in the form (letter l, number num) where the letter will be either "s" for square, or "c" for circle, and the number will be the side of the square or the radius of the circle.
pi = 3.14

Use the following formulas:
Perimeter of a square: 4 * side.
Perimeter of a circle: 6.28 * radius.  (2 * pi * radius)

The catch is you can only use arithmetic or comparison operators, which means:
    No if... else statements.
    No objects.
    No arrays.
    No formatting methods, etc.

The goal is to write a short, branch-free piece of code.
Examples
perimeter("s", 7) ➞ 28
perimeter("c", 4) ➞ 25.12
perimeter("c", 9) ➞ 56.52

Notes
No rounding is needed.
  -------------------------------------------------
7. Find Number of Digits in Number
Create a function that will return an integer number corresponding to the amount of digits in the given integer num.

Examples
num_of_digits(1000) ➞ 4
num_of_digits(12) ➞ 2
num_of_digits(1305981031) ➞ 10
num_of_digits(0) ➞ 1

Notes
Try to solve this challenge without using strings!
  -------------------------------------------------
8. Burglary Series (04): Add its Name

Given three arguments ⁠— an object obj of the stolen items, the pets name and a value ⁠— return an object with that name and value in it (as key-value pairs).

Examples
addName({}, "Brutus", 300) ➞ { Brutus: 300 }
addName({ piano: 500 }, "Brutus", 400) ➞ { piano: 500, Brutus: 400 }
addName({ piano: 500, stereo: 300 }, "Caligula", 440) ➞ { piano: 500, stereo: 300, Caligula: 440 }

Notes
The value argument will be a number.
  -------------------------------------------------
  -------------------------------------------------
  -------------------------------------------------
  -------------------------------------------------
  -------------------------------------------------
  -------------------------------------------------
  -------------------------------------------------
  -------------------------------------------------
  -------------------------------------------------
  -------------------------------------------------