function urutkanAbjad(str) {
    var str = str.split("")
    var tampung = ""
  
    for (i = 0; i < str.length; i++) {
      for (j = 0; j < str.length - i; j++) {
        if (str[j] > str[j+1]) {
          tampung = str[j]
          str[j] = str[j+1]
          str[j+1] = tampung
        }
      }
    }
    return str.join("")
  }
  
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'