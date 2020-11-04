/* eslint-disable @typescript-eslint/explicit-function-return-type */
let a1 = 1;
let b1 = [1, null, "a"];
let c1 = { x: 1, y: "a" };

let d = (x = 1) => x + 1;

window.onkeydown = (event: any) => {
    console.log(event.code);
};

interface Foo {
    bar: number;
}
// let foo1 = {} as Foo;
// let foo2 = <Foo>{}
let foo3: Foo = {
    bar: 1,
};
foo3.bar = 4;

console.log(foo3);
