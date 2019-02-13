function digitPerkalianMinimum(angka) {
  var temp = 0
  var arrLength = ""
  var arr = []
  var result = []

  for (i = 0; i <= angka; i++) {
    temp = 0
    if (angka % i === 0) {
      temp = i
      arr.push(temp)
    }
  }
  if (arr.length == 1) {
    return arr.length + arr.length
  }
  var arrLength = arr.length/2
  result.push (arr[arrLength-1], arr[arrLength])
  return result.join("").length
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2