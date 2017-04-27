# NodeLists

### Outline
- Arrays!
- What are they bad at?
- Why?
- lets design something that can address those shortcomings

## Why use nodes and lists of nodes?

To look at why we use nodelists, lets look at the other list structure that we are familiar with right now- the array. Like all data structures, arrays are good at certain operations and worse at others. In the case of arrays, it is easy to grab the data at a specific index (random access), it is a mutable data structure, and its data is ordered(indexed). Lets think about mutating an array though. Is it easier to insert/remove data from certain locations in array? Yes, adding and removing from the end of an array is much more efficient than adding/removing from the middle of an array, which is more efficient than adding/removing from the beginning of an array.
