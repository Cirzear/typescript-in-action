/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-parameter-properties */
/* eslint-disable @typescript-eslint/explicit-member-accessibility */
interface DogInterface {
    run(): void;
}
interface CatInterface {
    jump(): void;
}
let pet: DogInterface & CatInterface = {
    run() {},
    jump() {},
};

// let a: number | string = 1;
// let b: "a" | "b" | "c";
let c: 1 | 2 | 3;

class Dogs implements DogInterface {
    run() {}
    eat() {}
}
class Cats implements CatInterface {
    jump() {}
    eat() {}
}
enum Master {
    Boy,
    Girl,
}
function getPet(master: Master) {
    let pet1 = master === Master.Boy ? new Dogs() : new Cats();
    // pet.run()
    // pet.jump()
    pet1.eat();
    return pet1;
}

interface Square {
    kind: "square";
    size: number;
}
interface Rectangle {
    kind: "rectangle";
    width: number;
    height: number;
}
interface Circle {
    kind: "circle";
    radius: number;
}
type Shape = Square | Rectangle | Circle;
function area(s: Shape) {
    switch (s.kind) {
        case "square":
            return s.size * s.size;
        case "rectangle":
            return s.height * s.width;
        case "circle":
            return Math.PI * s.radius ** 2;
        default:
            return ((e: never) => {
                throw new Error(e);
            })(s);
    }
}
// console.log(area({ kind: "circle", radius: 1 }));
class Cir implements Circle {
    kind!: "circle";
    radius!: number;
}

let cirzear = new Cir();
cirzear.kind = 'circle';
cirzear.radius = 10;

console.log(area(cirzear));
