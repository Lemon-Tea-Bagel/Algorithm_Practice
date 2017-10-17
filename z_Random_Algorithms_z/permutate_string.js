
// Challenge #2
function permutate(string) {
    if (string.length < 2){
        return string;
    }

    let permutations = [];

    //Loop through the given string
    for (var i=0; i<string.length; i++){
        var char = string[i];
        
        //Prevent duplicates
        if (string.indexOf(char) != i){
            continue;
        }
        
        //Remove the selected char and concatenate the string together to make the remainder
        let remainder = string.slice(0,i) + string.slice(i+1,string.length);

        //Makes the function recursive, feeding the remainder into the function
        //And pushing the resulting permutations into the permuations array
        for (let sub of permutate(remainder)){
            permutations.push(char + sub)
        }
    }
    return permutations;
}
var myString = "xyz";
permutations = permutate(myString);
for (permutation of permutations)
    console.log(permutation)
