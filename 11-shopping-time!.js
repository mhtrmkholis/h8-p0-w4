function shoppingTime(memberId, money) {
    var obj = {}
    var stacattu = 1500000
    var zoro = 500000
    var hnn = 250000
    var uniklooh = 175000
    var casing = 50000
  
    if (memberId === "" || memberId === undefined) {
      return "Mohon maaf, toko X hanya berlaku untuk member saja"
    }
    else {
      obj.memberId = memberId
    }
    if (money < 50000) {
      return "Mohon maaf, uang tidak cukup"
    }
    else {
      obj.money = money
    }
    obj.listPurchased = []
    if (money >= stacattu) {
      money = money - stacattu
      obj.listPurchased.push("Sepatu Statcattu")
      }
    if (money >= zoro) {
      money = money - zoro
      obj.listPurchased.push("Baju Zoro")
    }
    if (money >= hnn) {
      money = money - hnn
      obj.listPurchased.push("Baju H&N")
    }
    if (money >= uniklooh) {
      money = money - uniklooh
      obj.listPurchased.push("Sweater Uniklooh")
    }
    if (money >= casing) {
      money = money - casing
      obj.listPurchased.push("Casing Handphone")
    }
    obj.changeMoney = money
    return obj
  }
  
  // TEST CASES
  console.log(shoppingTime('1820RzKrnWn08', 2475000));
    //{ memberId: '1820RzKrnWn08',
    // money: 2475000,
    // listPurchased:
    //  [ 'Sepatu Stacattu',
    //    'Baju Zoro',
    //    'Baju H&N',
    //    'Sweater Uniklooh',
    //    'Casing Handphone' ],
    // changeMoney: 0 }
  console.log(shoppingTime('82Ku8Ma742', 170000));
  //{ memberId: '82Ku8Ma742',
  // money: 170000,
  // listPurchased:
  //  [ 'Casing Handphone' ],
  // changeMoney: 120000 }
  console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
  console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
  console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja