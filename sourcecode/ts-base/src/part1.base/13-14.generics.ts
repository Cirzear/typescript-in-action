/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-member-accessibility */
function log<T>(value: T): T {
    console.log(value);
    return value;
}
log<string[]>(["a", ",b", "c"]);
log(["a", ",b", "c"]);

type Logs = <T>(value: T) => T;
let myLog: Logs = log;

myLog(2);
interface LogTest<T> {
    (value: T): T;
}
let myLog1: LogTest<number> = log;
myLog1(1);

class NewLog<T> {
    run(value: T) {
        console.log( '##',value);
        return value;
    }
}

let log1 = new NewLog<number>();
log1.run(1);
let log2 = new NewLog();
log2.run({ a: 1 });

interface Length {
    length: number;
}
function logAdvance<T extends Length>(value: T): T {
    console.log(value, value.length);
    return value;
}
logAdvance([1]);
logAdvance("123");
logAdvance({ length: 3 });

export {};
