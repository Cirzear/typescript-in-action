/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
let obj = {
    a: 1,
    b: 2,
    c: 3,
};

// function getValues(obj: any, keys: string[]) {
//     return keys.map(key => obj[key])
// }
function getValues<T, K extends keyof T>(obj: T, keys: K[]): T[K][] {
    return keys.map((key) => obj[key]);
}
console.log(getValues(obj, ["a", "b", "c"]));
// console.log(getValues(obj, ['d', 'e']))

// keyof T
interface Obj {
    a: number;
    b: string;
}
let key: keyof Obj;

// T[K]
let value: Obj["a"];

key = "b";

value = 12;

console.log(key, value);

// T extends U
