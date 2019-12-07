function add_1(x: number, y: number) {
    return x + y
}

// 可选参数
function add_2(x: number, y?: number) {
    return y? x + y: x
}

// 默认参数
function  add_6(x: number, y = 0, z: number, q = 3) {
    return x + y + z + q
}

// 在必选参数前，默认值不可省略，需传入 undefined 获取默认值；
// 必选参数后，可不传
add_6(1, undefined, 3)

let add_7: (x: number, y: number) => number

// 类型别名
type add_3 = (x: number, y: number) => number
let fun: add_3 = (a, b) => a + b

// 定义函数
interface add_5 {
    (x: number, y: number): number
}

console.log(add_1(1, 2))

// 剩余参数，参数个数不确定
function add_3(x: number, ...rest: number[]) {
    return x + rest.reduce((pre, cur) => pre + cur)
}

console.log(add_3(1, 3, 4, 5))

// 函数重载列表
function add_4(...rest: number[]): number 
function add_4(...rest: string[]): string

// 在类型最宽泛的版本中重载
function add_4(...rest: any): any {
    let first = rest[0]
    if (typeof first === 'string') {
        return rest.join('')
    }

    if (typeof first === 'number') {
        return rest.reduce((pre: number, cur: number) =>  pre + cur)
    }
}