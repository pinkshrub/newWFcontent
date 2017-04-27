Hey all!

Here are your weekly algorithm challenges! A few quick reminders:
These algorithms covera  braod range of topics and difficulties, if you only can get 1 or 2, that is okay! These algorithms are intended to be discussed in the algorithm slack channel and a review video of these will be coming out on Friday.

1) Shuffle an Array!
  - Recreate the shuffle(arr)function built into JavaScript, to efficiently shuffle a given array’s values. Work in-place, of course. Do you need to return anything from your function?  

2) Where is Claire?
  - On New Year’s Eve, have fun but don’t forget your way home! For this challenge create four functions (reset, moveBy, xLocation and yLocation) to track the travels of Claire, a wanderer. Calling reset() moves Claire home to the origin (0,0). The moveBy(xOffset,yOffset) function moves her by those amounts, in those directions. Finally, xLocation() and yLocation()return how far Claire is from home, in X and Y directions respectively. After the calls of reset(), moveBy(1,-2), and moveBy(3,1), subsequently calling xLocation() and yLocation() should return 4 and -1.  

  - Second: create distFromHome(). Assuming she moves diagonally, return her distance from home.

3) Parens/Braces valid?
  - Create a function that, given an input string str, returns a boolean whether parentheses in str are valid. Valid sets of parentheses always open before they close, for example. For "Y(3(p)p(3)r)s", return true. Given "N(0(p)3", return false: not every parenthesis is closed. Given "N(0)t )0(k", return false, because the underlined ")" is premature: there is nothing open for it to close.  

  - Given a sequence of parentheses, braces and brackets, determine whether it is valid. Example: "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!" => true. "D(i{a}l[ t]o)n{e" => false. "A(1)s[O (n]0{t) 0}k" => false.

4) Invert/compare hash  
  - Associative arrays are also called hashes (we’ll learn why later). Build invertHash(assocArr) to convert hash keys to values, and values to keys. Example: given {"name": "Zaphod", "charm": "high", "morals": "dicey"}, return object {"Zaphod": "name", "high": "charm", "dicey": "morals"}.

  - Level 2: Write a function that given two objects returns if they are identical.

Enjoy and see ya on slack!
- Alan
