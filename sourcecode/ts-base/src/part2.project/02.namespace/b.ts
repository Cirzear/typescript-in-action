/// <reference path="a.ts" />
namespace Shape {
    export function square(x: number) {
        return x * x
    }
}

console.log(Shape.cricle(1))
console.log(Shape.square(1))

import cricle = Shape.cricle
console.log(cricle(2))
