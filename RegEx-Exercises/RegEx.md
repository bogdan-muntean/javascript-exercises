https://edabit.com/challenge/QkuiL7XApt2RMQqTJ
1. RegEx Exercise 1: Find the Time

The time has a format: hours:minutes. Both hours and minutes has two digits, like 09:00.

Make a regexp to find time in the string: Breakfast at 09:00 in the room 123:456. In this task there’s no need to check time correctness yet, so 25:99 can also be a valid result. The regexp should not match 123:456.
Notes

The solution is in the Resources tab.

# ##################################################
2. RegEx Exercise 2: Find HTML Tags

Create a regular expression to find all (opening and closing) HTML tags with their attributes. Assume that tag attributes may not contain < and > (inside quotes too).

Example
const REGEXP = /your regexp/g

let str = '<> <a href="/"> <input type="radio" checked> <b>'

str.match(REGEXP) ➞  '<a href="/">', '<input type="radio" checked>', '<b>'

Notes
The solution is in the Resources tab.