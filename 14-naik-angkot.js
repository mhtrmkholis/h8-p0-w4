function naikAngkot(arrPenumpang) {
    var rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    var indexA = 0
    var indexB = 0
    var result = []
    
    for (i = 0; i < arrPenumpang.length; i++) {
      var obj  = {
        penumpang : "",
        naikDari : "",
        tujuan : "",
        bayar : 0
      }
      for (j = 0; j < rute.length; j++) {
        if (rute[j] === arrPenumpang[i][1]) {
          indexA = j
        }
        else if (rute[j] === arrPenumpang[i][2]) {
          indexB = j
        }
      }
      obj.penumpang = arrPenumpang[i][0]
      obj.naikDari = arrPenumpang[i][1]
      obj.tujuan = arrPenumpang[i][2]
      obj.bayar = (indexB - indexA) * 2000
      result.push(obj)
    }
    return result
  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]