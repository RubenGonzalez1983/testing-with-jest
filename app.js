//const sum = (a,b) => {
  //  return a + b
//}
    //console.log(sum(7,3))

  //  module.exports = { sum };

  // one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}



function fromDollarToYen(dollar) {
    let value = dollar/1.2;
    let yen = value * 127.9
    return yen;

}

function fromEuroToDollar(euro){
    let value = euro * 1.2
    return value
}
function fromYanToPound	(yen){
    let value = yen/127.9
    let pound = value * 0.8
    return pound
}
module.exports = {fromDollarToYen, fromEuroToDollar, fromYanToPound}