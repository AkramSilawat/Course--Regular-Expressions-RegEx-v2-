
// These are some phone numbers $1-***-****.  you Also 
// can call me at $1-***-**** and of course I'm always
// reachable at $1-***-****.

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
// can call me at 646.555.1234 and of course I'm always
// reachable at (212)867-5309.


// \d{3}-\d{3}-\d{4}   ->  Select 3- Digt Select 3- Digt Select 4 Digt





//   ----> Regular Expression <---- //

// =======>> Meta-chars <<======= //

//   single char             Quantifiers          position
//  /d -> 0-9               * -> 0 or more      ^  -> beginning
//  /w -> a-z A-z 0-9 _     + -> 1 or more      $  -> end
//  /s -> whitespace        ? -> 0 or 1         /b -> word boundry
//  .  -> any character     {max min}
//                          {n}



// -------------------------------------------------------

// =======>> character-classes (alternation) <<======= //

// The lynk is quite a link don't you think? l nk l(nk

// l[yi]nk
// l[yi (]nk

// \d{3}[-.]\d{3}           -> 646.555.1234   
// \d{3}[-.]\d{3}[-.]\d{4}    -> 917-555-1234   
// \(?\d{3}[-.)]\d{3}[-.]\d{4}   -> (212)867-5309   



// [a-c0-5]

// [0-5]{3}

// [^0-5]{3}

// [^abc]{3}           // start abc ignor

// \b[A-Za-z]{4}\b

// \b[A-Z][a-z]+\b




// daniel@shiffman.net or 
// daniel.shiffman@gmail.com and 
// daniel.shiffman@ArrayBuffer.edu


// [\w.]+@\w+\.(net|com|edu)


// =======>> Capturing Groups <<======= //

// These are some phone numbers 917-555-1234. 
// can call me at 646.555.1234 and of course I'm always
// These are some phone numbers 917-555-1234. 
// can call me at 646.555.1234 and of course I'm always


// \(?(\d{3})[-.)]\d{3}[-.]\d{4}     -> 917-555-1234. Replace to no -> $1-***-****  -> 917-***-****.


// Shiffman Daniel
// Schiffman Danielle
// Sheeefmahn Danny


// (\w+),\s+(\w+)
// aks, akram

// this is google [google](http://google.com) and this is
// [itp](http://itp.nyu.edu) and also
// [Coding Rainboe](http://codingrainbow.com)



// \[.*\]              all select
// \[.*?\]             sepret select
// \[.*?\]\(http.*?\)      all select

// \[(.*?)]\((http.*?\)    not slow
// <a href="$2">$1</a>    replace






// =======>> test() and match() <<======= //

// var r = /\d{3}/;

// console.log(r.test("123"));
// console.log(r.test("123ABC"));


// var r = /^\d{3}$/;

// console.log(r.test("123"));     
// console.log(r.test("123ABC"));   




// var s = "unicorns and rainbows and cupcakes";

// var r = /unicorn/;
// console.log(r.test(s));      // true
// console.log(s.match(r));



// var s = "unicorns and rainbows and cupcakes";


// var r = /\w+/;           //  fast match only
// console.log(s.match(r));




// var s = "unicorns and rainbows and cupcakes";

// var r = /[a-z]+/g;
// console.log(s.match(r));




// var s = "unicorns and rainbows And Cupcakes  akram";

// var r = /[a-z]+/g;
// console.log(s.match(r));    // Capital A J B single charecter not select




var s = "unicorns and rainbows And Cupcakes";

var r = /\b[a-z]+\b/g;  
console.log(s.match(r));    // Capital single one charecter  not select words

