# [Collatz Visualizer](https://widroz.github.io/Collatz-Visualizer/)

## What is [Collatz Conjecture](https://en.wikipedia.org/wiki/Collatz_conjecture)?

In number theory, this hypotesis states that repeating two simple arithmetic operations over any natural number we will always eventually reach 1.

The operations are:

![Collatz function](https://github.com/widroz/Collatz-Visualizer/blob/main/images/collatz%20function.png)

Numbers from 1 to (aprox.) 2⁶⁸ have been checked to reach 1.



## Why is it useful to study the paths "mod N"?

When visualizing natural numbers in N columns, we group them by their remainder. If we have 6 columns, 1 and 7 are in the first column because 1 % 6 = 7 % 6 = 1.

We observe that with this (but not only this) number of columns, some patterns appear.

Example: half of the the second column number's next step is always a number in the first column (image below)

![Second column odd positions with 6 columns](https://github.com/widroz/Collatz-Visualizer/blob/main/images/2nd%20odd%20mod%206.PNG)


On the other hand, the rest of numbers in that column redirect to a number in the fourth column (image below)

![Second column even positions with 6 columns](https://github.com/widroz/Collatz-Visualizer/blob/main/images/2nd%20even%20mod%206.PNG)

Some powerful conclusions can be deduced from these images: if someone proves that all values in first and fourth column eventually reach 1, then every number in second column also does.

These patterns dissapear or change when modifying the number of columns and can be "algebraically" studied, this tool helps interested people to visualize them.

### Functionalities


This application allows user to automatically draw Collatz's path for a given starting number. It is also possible to increment/decrement the number of rows and columns while conserving the path, making possible to check how a given path is "drawn" over different ["Rings"](https://en.wikipedia.org/wiki/Ring_(mathematics)).

A number can also be clicked and "painted" of another color. This color dissapears when the number is not in the same row anymore or when clicked again.



