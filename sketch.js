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

function newText() {
    var s = textfield.value();

    // var r = /\d{3}[-.]\d{4}/
    // var r = /\d{3}[-.]\d{4}/g
    var r = /(\d{3})[-.]\d{4}/g

    // var mateches = s.match(r);
    // var r = /\w+@\w+\.(net|com|org)/




    // var result = r.exec(s);
    // while (result != null) {
    //     // createP(result);      // -->  /(\d{3})[-.]\d{4}/g
    //     createP(result[1]);      // -->  /(\d{3})[-.]\d{4}/g
    //     result = r.exec(s);
    // }


    var results;
    while (results = r.exec(s)) {
        createP(results[0])
    }




    // for (var i = 0; i < mateches.length; i++){
    //     createP(mateches[i])
    // }
    // createP(r.test(s));

}


// --->> exec()

function newText() {
    var s = textfield.value();

    var r = /(\d{3})[-.]\d{4}/g


    var result = r.exec(s);
    while (result != null) {
        // createP(result);      // -->  /(\d{3})[-.]\d{4}/g
        createP(result[0]);      // -->  /(\d{3})[-.]\d{4}/g
        result = r.exec(s);
    }

}


// ----> split()

// in terminal

// var s = "unicorn and rainbows and cupcakes";

// s.split(/\s/);= => ["unicorn", "and", "rainbow", "and", "cupcakes"]

// s.split(/,\s/);= => ["unicorn and rainbow and", "cupcakes"]

// s.split(/[,\s/]/);= => ["unicorn", "and", "rainbow", "and", "", "cupcakes"]

// s.split(/[,\s/]+/);= => ["unicorn", "and", "rainbow", "and", "cupcakes"]  // -> extra empty arr lost




function newText() {
    var s = textfield.value();

    // var r = /[,.!?\s]+/;
    // var r = /[.,?!]+/;
    // var r = /[A-Z]+/;
    var r = /(\w+)/;
    var words = s.split(r);

    console.log(words);

    for (var i = 0; i < words.length; i++) {
        createP(words[i])
    }
}