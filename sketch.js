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
    while( results = r.exec(s)){
        createP(results[0])
        console.log
    }

   


    // for (var i = 0; i < mateches.length; i++){
    //     createP(mateches[i])
    // }
    // createP(r.test(s));

}

