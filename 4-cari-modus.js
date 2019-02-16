function cariModus(arr) {
    // you can only write your code here!
    var countModus = 0;
    var modus = 0;
    var tempCount = 0;
  
    for(var i = 0;i< arr.length;i++){
        tempCount = 0;
        for(var j=i;j< arr.length;j++){
            if(arr[i] == arr[j]) {
                tempCount += 1;
            }
        }
        if (countModus < tempCount) {
            countModus = tempCount;
            modus = arr[i];
        } 
    }
  
    if (countModus === 1) {
        return -1;
    } else if (countModus == arr.length){
        return -1;
    } else {
        return modus;
    }
  }
  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1