export default class User{
    constructor(name, money){
        this.name = name;
        this.money = money;
        this.stockowned = {}

    }

    getMoney(){
        return this.money;
    }


    getName(){
        return this.name;
    }


    buy(stockCode, num){
        this.stockowned[stockCode] = num
    }

    getStockOwned(){
        return this.stockowned;
    }

    sell(stockCode, num){
        let exist = stockCode in this.stockowned
        if(!exist) return false;

        let num_has = this.stockowned[stockCode]
        let num_left = num_has - num

        if(num_left<0) return false;
        
        this.stockowned[stockCode] = num_left
        return true

    }

}