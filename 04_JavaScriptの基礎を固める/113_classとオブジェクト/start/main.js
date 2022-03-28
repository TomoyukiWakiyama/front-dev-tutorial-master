const obj = {
    first_name: 'Tomoyuki',
    last_name: 'Wakiyama',
    printFullName: function() {
        return this.first_name + this.last_name;
    }
}

// console.log(obj.printFullName());

class MyObj {
    constructor() {
        this.first_name = 'Tomoyuki';
        this.last_name = 'Wakiyama';
    }
    printFullName() {
        console.log(this.first_name + this.last_name);
    }
}

const obj2 = new MyObj();
obj2.printFullName();