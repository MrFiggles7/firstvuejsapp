function ProductList(){
    this.__proto__ = [];

    this.addItem = function (itemList) {
        this.push(itemList);

        return this;
    }


}
