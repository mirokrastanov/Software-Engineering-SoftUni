class List {
    constructor() {
        this.items = [];
        this.size = this.items.length;
    }
    add(element) {
        this.items.push(Number(element));
        this.items.sort((a, b) => a - b);
        this.size = this.items.length;
    }
    remove(index) {
        if (index >= 0 && index <= this.items.length - 1) {
            this.items.splice(index, 1);
            this.size = this.items.length;
        } else {
            throw new Error('invalid index');
        }
    }
    get(index) {
        if (index >= 0 && index <= this.items.length - 1) {
            return this.items[index];
        } else {
            throw new Error('invalid index');
        }
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));