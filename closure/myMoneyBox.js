function moneyBox() {
    let saveCoins = 0

    function countCoins(coins) {
        saveCoins += coins
        console.log(`moneyBox: $${saveCoins}`);
    }
    return countCoins
}

const myMoneyBox = moneyBox()

myMoneyBox(5)
myMoneyBox(5)
myMoneyBox(15)


const anaMoneyBox = moneyBox()
 anaMoneyBox(46)
 anaMoneyBox(2)
 anaMoneyBox(6)




