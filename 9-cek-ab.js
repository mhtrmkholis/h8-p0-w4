function checkAB(str) {
    var posisiA = 0;
    var posisiB = 0;
  
    for (i = 0; i < str.length; i++) {
      if (checkA === false) {
        if (str[i] === "a") {
          posisiA = i+1
        }
      }
      if (checkB === false) {
        if (str[i] === "b") {
          posisiB = i+1
        }
      }
    }
    if (posisiA - posisiB === 4 || posisiB - posisiA ===4) {
      return true
    }
    else {
      return false
    }
  }
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false