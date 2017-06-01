Hey Everybody!

This is the first algorithm challenges email for some of y'all so, Welcome! This is a weekly email you will be seeing where we provide you 4 challenges to work on and discuss over the week. On Friday, I'll go ahead and send out another email that will contain video walkthroughs for the weekly challenges. The last note is that these challenges are going to cover a wide range of skills. If you only get 1 solved, that is okay! With that said, here we go!

#1) CCV
  The Luhn formula is sometimes used to validate credit card numbers. Create the function isCreditCardValid(digitArr) that accepts an array of digits on the card (13-19 depending on the card), and returns a boolean whether the card digits satisfy the Luhn formula, as follows:
    1) Set aside the last digit and do not include it in these calculations (until step 5);
    2) Starting from the back, multiply the digits in odd positions (last, third-to-last, etc.) by 2;
    3) If any results are larger than 9, subtract 9 from them;
    4) Add all numbers (not jiust our odds) together;
    5) Now add the last digit back in – the sum should be a multiple of 10.  
  For example, given digit array [5,2,2,8,2], it would become 1) [5,2,2,8], then 2) [5,4,2,16], then 3) [5,4,2,7], then 4) 18, then 5) 20, so we would return true. If the final digit were any other value, we would return false.

#2) Book Index
  Martin is writing his opus: a book of algorithm challenges, set as lyrics to a suite of baroque fugues. He knows that some of those fugueing challenges will be less popular than others, so he needs a book index. Given a sorted array of pages, produce a book index string. Consecutive pages should form ranges separated by a dash. For [1,3,4,5,7,8,10], return the string "1, 3-5, 7-8, 10".

#3) Roman Numerals
  A) Given a positive integer that is less than 4000, return a string containing that value in Roman numeral representation. In this representation, I is 1, V is 5, X is 10, L = 50, C = 100, D = 500, and M = 1000. Remember that 4 is IV, 349 is CCCIL and 444 is CDXLIV.

  B) Sept 16, 2014 headline: “Ancient Computer Found In Roman Shipwreck”. Composed of more than 30 bronze gears, its wooden frame features at least 2000 characters. Given a string containing the Roman numeral representation of a positive integer, return that integer. Remember that III is 3, DCIX is 609 and MXDII is 1492.

#4) Singly Linked List
  We have a variety of ways to store data available to us. A common structure we use is an Array, but arrays have a shortcoming: They require a contiguous allocation of memory space. To solve this, we can use nodes (read: Objects) that contain the information for an 'item' in our list and a link to the 'next' item on our list. A node for our list may look like this:

  function Node(info) {
    this.info = info;
    this.next = null
  }

  The fourth challenge this week is to build a NodeManager that contains a key to ONLY the first node in the list(call it this.top), and methods to:
    - add a node to the front/back
    - remove a node from the front/back
    - return if their are nodes in the NodeManager
    - return the number of nodes in the NodeManager

Have fun this week y'all! See ya on slack.

Cheers,
Alan 
