arr = [3,4,5,6,1,6,2,3,4,-1,-2,-3,6,6];

function insertSort(arr) {
    for (var i = 0; i < arr.length-2; i++) {
        var temp = arr[i+1];
        var j = i;
        while (j >=0 && arr[j] > temp) {
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = temp;
    }
    return arr;
}
insertSort(arr);
console.log('--------------insertSort----------------------');
console.log(arr);
console.log('----------------------------------------------');
// combine 2 sorted array
arr1 = [1,2,3,4,5];
arr2 = [-2,3,4,8];

function CSA(arr1,arr2) {
    a = arr1.length;
    b = arr2.length;
    if (a < b) {
        let temp = arr1;
        arr1 = arr2;
        arr2 = temp;
        let temp2 = a;
        a = b;
        b = temp2;
    }
    m = a-1;
    n = b-1;
    k = a+b-1;
    while (m>=0 && n>=0) {
        if (arr1[m] > arr2[n]) {
            arr1[k--] = arr1[m--];
            // console.log(arr1[k]);
        } else {
            arr1[k--] = arr2[n--];
        }
    }
    while (n>=0) {
        arr1[k--] = arr2[n--];
    }
    return arr1;
}
CSA(arr1,arr2);
console.log('------------combine 2 sorted array------------------------');
console.log(arr1);
console.log('----------------------------------------------------------');
