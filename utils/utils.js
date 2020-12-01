let genBill = (items, menuMap) => {
    let bill = 0;
    order = items.split(',')
    order.forEach(function (item) {
        if (menuMap.has(item)) {
            let price = menuMap.get(item)
            bill += price
        } else {
            console.log(`${item} not available`)
        }
    });
    return bill
}

module.exports.genBill = genBill