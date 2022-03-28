// const obj = {
//     first_name: 'Mafia',
//     last_name: 'Code',
//     printFullName: function() {
//         console.log(this.first_name);
//         const fn = function() {
//             console.log(this.first_name);
//         };
//         window.setTimeout(fn);  
//     }
// }
// obj.printFullName();

class MyObj {
    constructor() {
        this.first_name = 'Mafia';
        this.last_name = 'Code';
    }

    printFullName() {
        console.log(this.first_name);
        const fn = function() {
            console.log(this.first_name);
        };
        window.setTimeout(function(){
            console.log(this);
        });
    }
}

const obj2 = new MyObj();

obj2.printFullName();