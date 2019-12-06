function add_1(x: number, y: number) {
    return x + y
}

// 可选参数
function add_2(x: number, y?: number) {
    return y? x + y: x
}

type add_3 = (x: number, y: number) => number

// 定义函数
interface add_5 {
    (x: number, y: number): number
}

console.log(add_1(1, 2))

function add_3(x: number, ...rest: number[]) {
    return x + rest.reduce((pre, cur) => pre + cur)
}

console.log(add_3(1, 3, 4, 5))

// 重载
function add_4(...rest: number[]): number
function add_4(...rest: string[]): string
function add_4(...rest: any): any {
    let first = rest[0]
    if (typeof first === 'string') {
        return rest.join('')
    }

    if (typeof first === 'number') {
        return rest.reduce((pre: number, cur: number) =>  pre + cur)
    }
}