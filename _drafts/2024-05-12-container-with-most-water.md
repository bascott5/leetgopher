---
layout: "article"
title: "Container With Most Water"
time: "05/12/2024"
---

For this LeetCode problem, we are trying to find the largest area between two elements in an integer array, where the value of each element is the height and the distance between elements is the width. Note that the height of the overall rectangle that is formed between the two elements is determined by the smallest of the two elements. For example, if two elements, 8 and 7, are 7 indices away from each other, then the formula that would be used to get their area would be `7 x 7 = 49`. 

The immediately apparent solution would be to create a nested for loop that compares every element to each other to find the pair that creates the largest area. Unfortunately, that solution would have a time complexity of **O(n^2)** which isn't preferable. Fortunately, there is an alternate solution that should cut down on the amount of steps the algorithm will take to execute.

For our base case, we can assume that the array will always contain at least two elements, else the area will always be 0. We can then get the area by finding the smallest element out of the two.

We can approach this problem by comparing the elements at the beginning and end of the array, before checking the next one on the left or right depending on which element is lesser while moving toward the middle. The reason that we are only checking the element next to the one that is lesser is because the smallest element of the two elements being compared will always be the height of our rectangle. We are also checking if the area of the current two elements are greater than the current maximum every loop.

My implentation is below...
```go
func maxArea(height []int) int {
    var ans int
    s := 0
    e := len(height) - 1

    if len(height) == 2 {
        if height[0] < height[1] {
            ans = (len(height) - 1) * height[0]
        } else {
            ans = (len(height) - 1) * height[1]
        }
    }

    for i := 0; i < len(height) - 1; i++ {
        if height[s] <= height[e] {
            if ans < ((e - s) * height[s]) {
                ans = (e - s) * height[s]
            }
        } else {
            if ans < ((e - s) * height[e]) {
                ans = (e - s) * height[e]
            }
        }

        if height[s] <= height[e] {
            s++
        } else {
            e--
        }
    }

    return ans
}
```
**Time Complexity: O(n)**