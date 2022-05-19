# Collatz Visualizer

## Introduction

### [Collatz Conjecture](https://en.wikipedia.org/wiki/Collatz_conjecture)

In number theory, this hypotesis states that repeating two simple arithmetic operations over any natural number we will always eventually reach 1.

The operations are:

![Collatz function](https://wikimedia.org/api/rest_v1/media/math/render/svg/ec22031bdc2a1ab2e4effe47ae75a836e7dea459)

Numbers from 1 to (aprox.) 2⁶⁸ have been checked to reach 1.



## Why is it useful to study the paths "mod N"?

When visualizing natural numbers in N columns, we group them by their remainder.

If we have 6 columns, 1 and 7 are in the first column because 1 % 6 = 7 % 6 = 1.

We observe that with this number of columns, some patterns appear.

Example: the even positions of the second column's next step is always a number in first column.
![Second column even positions with 6 columns](https://github.com/widroz/Collatz-Visualizer/blob/main/images/2nd%20even%20mod%206.PNG)

