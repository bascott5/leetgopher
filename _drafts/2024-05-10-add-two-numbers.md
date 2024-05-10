---
layout: "article"
title: "Add Two Numbers"
time: "05/10/2024"
---

```go
func addTwoNumbers(l1 *ListNode, l2 *ListNode) *ListNode {
	if l1 == nil && l2 == nil {
		return l1
	}

	num1 := 0
	num2 := 0
	length := 1

	for l1 != nil {
		num1 += l1.Val * length
		length *= 10

		l1 = l1.Next
	}

	for l2 != nil {
		num2 += l2.Val * length
		length *= 10

		l2 = l2.Next
	}

	sum := num1 + num2
	var l3 *ListNode

	// insert at end
	for sum != 0 {
		l3 = push(l3, sum%10)
		sum /= 10
	}

	return l3
}

func push(l *ListNode, val int) *ListNode {
	lCopy := ListNode{
		Next: l,
		Val:  val,
	}

	return &lCopy
}
```