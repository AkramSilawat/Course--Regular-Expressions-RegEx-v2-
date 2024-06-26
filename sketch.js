// -->> test() and match()

var textfield;
var output;
var submit;

function setup() {
    noCanvas();
    textfield = select("#input");
    // textfield.changed(newText);
    output = select('#output');
    submit = select("#submit");
    submit.mousePressed(newText);
}

// function newText() {
//     var s = textfield.value();

// var r = /\d{3}[-.]\d{4}/
// var r = /\d{3}[-.]\d{4}/g
// var r = /(\d{3})[-.]\d{4}/g

// var mateches = s.match(r);
// var r = /\w+@\w+\.(net|com|org)/




// var result = r.exec(s);
// while (result != null) {
//     // createP(result);      // -->  /(\d{3})[-.]\d{4}/g
//     createP(result[1]);      // -->  /(\d{3})[-.]\d{4}/g
//     result = r.exec(s);
// }


// var results;
// while (results = r.exec(s)) {
//     createP(results[0])
// }




// for (var i = 0; i < mateches.length; i++){
//     createP(mateches[i])
// }
// createP(r.test(s));

// }


// --->> exec()

// function newText() {
//     var s = textfield.value();

//     var r = /(\d{3})[-.]\d{4}/g


//     var result = r.exec(s);
//     while (result != null) {
//         // createP(result);      // -->  /(\d{3})[-.]\d{4}/g
//         createP(result[0]);      // -->  /(\d{3})[-.]\d{4}/g
//         result = r.exec(s);
//     }

// }


// ----> split()

// in terminal

// var s = "unicorn and rainbows and cupcakes";

// s.split(/\s/);= => ["unicorn", "and", "rainbow", "and", "cupcakes"]

// s.split(/,\s/);= => ["unicorn and rainbow and", "cupcakes"]

// s.split(/[,\s/]/);= => ["unicorn", "and", "rainbow", "and", "", "cupcakes"]

// s.split(/[,\s/]+/);= => ["unicorn", "and", "rainbow", "and", "cupcakes"]  // -> extra empty arr lost



// function newText() {
//     var s = textfield.value();

//     // var r = /[,.!?\s]+/;
//     // var r = /[.,?!]+/;
//     // var r = /[A-Z]+/;
//     var r = /(\w+)/;
//     var words = s.split(r);

//     console.log(words);

//     for (var i = 0; i < words.length; i++) {
//         createP(words[i])
//     }
// }




//---> replace()

// --> terminal

// var s = "unicorns and rainbows";

// s.replace(/unicorns/,"cupcakes");
// output --> "cupcakes and rainbows"



// var s = "unicorns and rainbows and cupcakes";

// s.replace(/\w{6,8}/,"kittens");
// output --> kittens and rainbows and cupcakes

// s -> unicorns and rainbows and cupcakes

// s.replace(/\w{8}/g,"kittens");
// output --> "kittens and kittens and kittens";



// var s = "unicorns and rainbows and cupcakes";

// s.replace(/([aeiou])/g,"$1$1");
// output --> "uuniicoorns aand raaiinboows aand cuupcaakees"




// function newText() {
//     var s = textfield.value();
//     var r = /\b\w+\b/g;

//     var newsting = s.replace(r, replacer);
//     console.log(newsting);
//     createP(newsting);
// }

// function replacer(match) {
//     // console.log(match)
//     if (match.length == 4) {         // match the 4 character return UpperCase   - anithing same return
//         return match.toUpperCase();
//     } else {
//         return match;
//     }
// }


// --------------------------------------

// function newText() {
//     var s = textfield.value();
//     var r = /\d{3}-\d{4}/g;
//     var r = /(\d{3})-(\d{4})/g;

//     var newsting = s.replace(r, replacer);
//     // console.log(newsting);
//     createP(newsting);
// }

// function replacer(match) {
//     function replacer(match, group1, group2) {
//     console.log(arguments);
//     console.log(arguments[0].length + arguments[1].length + arguments[2].length);
//     // console.log(match);
//     // console.log(group1);
//     // console.log(group2);
//    return match;
// }





// --> Word Interactor

// function newText() {
//     var s = textfield.value();

//     var words = s.split(/\w+/);

//     for(var i = 0; i < words.length; i++){
//         createSpan(words[i]);
//         // createSpan(' ');
//     }
    
//     // console.log(words);
//     // createP(s);
// }


// --------------------------------------

function newText() {
    var s = textfield.value();

    var words = s.split(/(\w+)/);
    console.log(words)

    for(var i = 0; i < words.length; i++){
       var span1 =  createSpan(words[i]);
       span1.parent(output);

    //    var span2 = createSpan(' ');
    //    span2.parent(output)
    }
    
    // console.log(words);
    // createP(s);
}