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
  
  -------------------------------------------------
  -------------------------------------------------
  -------------------------------------------------
  -------------------------------------------------
  -------------------------------------------------
  -------------------------------------------------
  -------------------------------------------------
  -------------------------------------------------
  -------------------------------------------------