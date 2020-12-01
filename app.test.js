const expect = require('chai').expect;
const { genBill } = require('./utils/utils')

describe('Restaurant Utils Test Suite', () => {

    it('Should return bill of amount 120', () => {
        let menuMap = new Map([
            ['Dosa', 90.00],
            ['Idli', 40.00],
            ['Vada Sambhar', 40.00],
            ['Uttapam', 60.00],
            ['Poha', 20.00],
            ['Sabudana Wada', 40.00]
        ]);
        let items = "Dosa,Poha"
        let bill = genBill(items, menuMap)
        expect(bill).to.be.equal(110);
    });
    it('Should return bill of amount 0', () => {
        let menuMap = new Map([
            ['Dosa', 90.00],
            ['Idli', 40.00],
            ['Vada Sambhar', 40.00],
            ['Uttapam', 60.00],
            ['Poha', 20.00],
            ['Sabudana Wada', 40.00]
        ]);
        let items = "D"
        let bill = genBill(items, menuMap)
        expect(bill).to.be.equal(0);
    });

});
