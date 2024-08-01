const sum = (a,b) => {
    return a + b
}
// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}
let fromEuroToDollar = (euro) => {
    return parseFloat((euro*1.07).toFixed(2));
}
let fromDollarToYen = (dollar) => {
    return parseFloat((dollar/1.07*156.5).toFixed(2)) 
}
let fromYenToPound = (yen) => {
    return parseFloat((yen/156.5*0.87).toFixed(2))  
}

module.exports = {sum,fromEuroToDollar,fromDollarToYen,fromYenToPound};
