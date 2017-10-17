
function RELS(arr) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length % 2 == 0) {
            count++;

        }
        arr.length = arr.length - count - 1;
    }
    console.log(arr);
}

var arr = ["Nope", "Its", "Kris", "lol"];

RELS(arr);



function asdf(arr){
    var keep = 0;
    for (var i = 0; i < arr.length; i++){
        if (arr[i].length % 2 != 0){
            arr[keep] = arr[i];
            keep++;
        }
    }
    arr.length = keep;
    return arr;
}
var arr = ["Nope", "Its", "Kris"];
console.log(asdf(arr));
