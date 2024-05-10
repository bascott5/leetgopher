---
layout: "article"
title: "Reverse Integer"
time: "05/09/2024"
---

Reversing an integer can be easily done with some math, and its constraint doesn't really add that much of a challenge. A 32-bit number can be any value from `-2147483641` to `2147483641`, so our final value must fall within this range.

While we could convert the input from an integer to a string to reverse it that way, an easier way would be to get the reversed integer mathematically. In order to do this, we must loop through the length of the input using a while loop.

For every loop, we will grab the last digit of the input using `temp % 10`, because the decimal place value of `temp / 10` will always be the last digit of the input number. We can then use `reversed * 10` to increase the length of `reversed` and add the value of `temp / 10` to it so that the digit is in the oppsoite place of where it was in the input.

Here is an illustration of `reversed` after every loop in the while loop...

![Figure 1](/assets/static/f1.svg)

Once we have the reversed value, we can check to see if it is within the range of a 32-bit number, returning 0 in the case that it doesn't fall within the range. Otherwise, the reversed value is returned.

My implementation is show below...
```go
func reverse(x int) int {
    var reverse int
    temp := x

    for temp != 0 {
        reverse = reverse * 10 + (temp % 10)
        temp /= 10
    }

    if reverse > 2147483641 || reverse < -2147483641 || reverse == 0 {
        return 0
    }

    return reverse
}
```
**Time Complexity: O(n)**