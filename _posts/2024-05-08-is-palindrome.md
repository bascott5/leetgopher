---
layout: "article"
title: "Palindrome Number"
time: "05/08/2024"
---

A palindrome is a string or number that is the exact same when reversed. In this LeetCode problem, we are tasked with finding whether the inputted integer is a palindrome or not. 

For our base case, we can determine that any negative value will automatically not be a palindrome, since there can never be two negative values. For example, the reversed version of `-121` would be `121-` which wouldn't be a palindrome.

While we could convert the input from an integer to a string to reverse it that way, an easier way would be to get the reversed integer mathematically. In order to do this, we must loop through the length of the input using a while loop.

For every loop, we will grab the last digit of the input using `temp % 10`, because the decimal place value of `temp / 10` will always be the last digit of the input number. We can then use `reversed * 10` to increase the length of `reversed` and add the value of `temp / 10` to it so that the digit is in the opposite place of where it was in the input.

Here is an illustration of `reversed` after every loop in the while loop...

![Figure 1](/assets/static/f1.svg)

Afterwards, the temporary copy of the input is lowered by one decimal place. This continues until the length of both the input and reversed are the same. We know that if the values of both the reversed and input are the same, then the input is a palindrome, which would fit with its definition.

My implementation is shown below...

```go
func isPalindrome(x int) bool {
    if x < 0 {
        return false
    }

    var reversed int
    temp := x

    for temp > 0 {
        reversed = reversed * 10 + (temp % 10)
        temp /= 10
    }

    return reversed == x
}
```
**Time Complexity: O(n)**