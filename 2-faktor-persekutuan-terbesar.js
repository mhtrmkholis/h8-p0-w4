function fpb(angka1, angka2) {
    var result = 0
    var pembanding = 0
  
    if (angka1 > angka2)  {
      for (i = 0; i < angka2; i++) {
        pembanding = angka1 % (angka2 - i)
        result = angka2 - i
        if (pembanding === 0) {
          if (angka2 % result === 0) {
            return result
          }
        }
      }
    }
    else if (angka1 < angka2) {
      for (i = 0; i < angka1; i++) {
        pembanding = angka2 % (angka1 -i)
        result = angka1 -i
        if (pembanding === 0) {
          if (angka1 % result === 0) {
            return result
          }
        }
      }
    } 
  }
  
  // TEST CASES
  console.log(fpb(12, 16)); // 4
  console.log(fpb(50, 40)); // 10
  console.log(fpb(22, 99)); // 11
  console.log(fpb(24, 36)); // 12
  console.log(fpb(17, 23)); // 1