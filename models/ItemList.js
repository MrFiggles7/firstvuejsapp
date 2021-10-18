function ItemList(title){
    this.title = title;

    this.__proto__ = [];

    this.addItem = function (item) {
        this.push(new Product(item));

        return this;
    }
}
