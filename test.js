const { sum, fromDollarToYen , fromEuroToDollar , fromYenToPound } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    expect(sum(14, 9)).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
     expect(fromEuroToDollar(1)).toBe(1.07);
}); 


test("Ten dollars should be 1462.62 yen", function() {
     expect(fromDollarToYen(10)).toBe(1462.62);
})

test("One thousand yen should be 5.56 pounds", function() {
    expect(fromYenToPound(1000)).toBe(5.56);
})