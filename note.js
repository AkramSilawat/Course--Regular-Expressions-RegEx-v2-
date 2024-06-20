
// These are some phone numbers 917-555-1234.  Also, you 
// can call me at 646.555.1234 and of course I'm always
// reachable at (212)867-5309.

// RegEx Code

// \w\w\w      -> These 3 char select  numbers  3 + 3 select s not select
// \d\w\d\w    -> 646.555t.1234
// \s\s        -> two whitespace

// \w{5} 
// \w{5}\s
// \s\w{5}\s
// \w+
// \w\d+





// The colors of the rainbow have many colours and the 
// rainbow does not have a single colours.

// colou?r
// colou?rs?



// This is something
// is about
// a blah
// words
// sequence of words
// Hello and
// single
// Goodbye and
// Go go go rainbow!


// ^\w+        -> Start select
// \w+$        -> End select
// ^\w+$       -> line of one words select only

// \b\w{4}       -> all words select 4 Characters 
// \b\w{4}\b     -> Only 4 Word Character select         // block Boundri 
// \b\w{4,6}\b   -> Only 4 And 6 Word Character select         // block Boundri 




// These are some phone numbers 917-555-1234. 

// \d{3}-\d{3}-\d{4}   ->  Select 3- Digt Select 3- Digt Select 4 Digt









//   ----> Regular Expression <---- //

// =======>> Meta-chars <<======= //

//   single char             Quantifiers         position
//  /d -> 0-9               * -> 0 or more      ^  -> beginning
//  /w -> a-z A-z 0-9 _     + -> 1 or more      $  -> end
//  /s -> whitespace        ? -> 0 or 1         /b -> word boundry
//  .  -> any character     {min, max}
//                          {n}


// char-class (alternation)

// [^0-9]{3}        //  match  // all non number
// l[yi]nk          //  match  // link or lynk
// \d{3}[-.]\d{3}   //  match  // 222.111 or 888-999
// \b[A-Z][a-z]*\b  //  match  // Book or The or A or Liitle or Son