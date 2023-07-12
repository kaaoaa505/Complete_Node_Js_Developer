// initiate classes in the same order
// CODE PERFORMANCE: faster
function pointObject(x, y){
    this.x = x;
    this.y = y;
}
const obj_1 = new pointObject(1,2);
const obj_2 = new pointObject(3,4);

// initiate classes in the any order
// CODE PERFORMANCE: slower 
obj_1.a = 10;
obj_1.b = 20;
obj_2.b = 40;
obj_2.a = 30;
obj_2.c = 50;
obj_2.d = 60;

// delete object property change hidden classes
// CODE PERFORMANCE: slower
delete obj_2.c;

console.log('--- obj_1 is: ', obj_1);
console.log('--- obj_2 is: ', obj_2);