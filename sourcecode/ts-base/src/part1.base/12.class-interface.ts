/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-parameter-properties */
/* eslint-disable @typescript-eslint/explicit-member-accessibility */
interface Human {
    name: string;
    eat(): void;
}

class Asian implements Human {
    constructor(name: string) {
        this.name = name;
    }
    name: string;
    eat() {}
    age: number = 0;
    sleep() {}
}

interface Man extends Human {
    run(): void;
}

interface Child {
    cry(): void;
}

interface Boy extends Man, Child {}

let boy: Boy = {
    name: "cirzear",
    run() {},
    eat() {},
    cry() {},
};

console.log(boy);

class Auto {
    state = 1;
    // private state2 = 1
}
interface AutoInterface extends Auto {}
// class C implements AutoInterface {
//     state1 = 1
// }
class Bus extends Auto {
    constructor(state: number) {
        super();
        this.state = state;
    }
}

let newBus: Bus = {
    state: 1111,
};

console.log(newBus);
