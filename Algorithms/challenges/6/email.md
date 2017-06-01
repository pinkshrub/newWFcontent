Hey all! You know what it is! Kindly reminder, you may not be 100% able to do all of 'em.

#1
Write a function that returns whether the given array has a balance point between indices, where one side’s sum is equal to the other’s. Example: [1,2,3,4,10] → true (between indices 3 & 4), but [1,2,4,2,1] → false.

Here, a balance point is on an index, not between indices. Return the balance index where sums are equal on either side (exclude its own value). Return -1 if none exist. Ex.: [2,5,7,0,3] → 2, but [9,9] → -1.

#2
Assume that you have a text field 75 characters long. You want to fill it with spaces and asterisks ('*').  • Write a function drawLeftStars(num) that accepts a number and prints that many asterisks.  • Write a function drawRightStars(num) that prints 75 characters total. Stars should build from right side. The last num characters should be asterisks; the other 75 should be spaces.  • Write function drawCenteredStars(num) that prints 75 characters total. The stars should be centered in the 75. The middle num characters should be asterisks; the rest of the 75 spaces.  • (optional) Can you create a cool text-art picture, for example an epic Empire versus Rebellion battle, using formations like this? (=*=) >o<

#3
You are playing the following Bulls and Cows game with your friend: You write down a number and ask your friend to guess what the number is. Each time your friend makes a guess, you provide a hint that indicates how many digits in said guess match your secret number exactly in both digit and position (called "bulls") and how many digits match the secret number but locate in the wrong position (called "cows"). Your friend will use successive guesses and hints to eventually derive the secret number.

For example:
Secret number: "1807"
Friend's guess: "7810"

Hint: 1 bull and 3 cows. (The bull is 8, the cows are 0, 1 and 7.)
Write a function to return a hint according to the secret number and friend's guess, use A to indicate the bulls and B to indicate the cows. In the above example, your function should return "1A3B".

#4
Create function combineArrs(arr1,arr2) that sorts two already separately sorted arrays, placing the result back into the first provided array. Can you work completely in-place?

Use the combineArrs() function above to construct mergeSortArr() for an unsorted array. What are the run-time and space complexities of your MergeSortArr solution?

Should be fun! See ya on slack!

Cheers,
Alan
