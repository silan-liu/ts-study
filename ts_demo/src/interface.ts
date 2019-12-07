
// 声明函数
let add: (x: number, y: number) => number

// 定义函数
interface Add {
    (x: number, y: number): number
}

// 类型别名
type Add2 = (x: number, y: number) => number

// 函数实现
let add2: Add2 = (a, b) => a + b

// 混合类型接口
interface Lib {
    (): void;
    version: string;
    doSomething(): void;
}

// 创建实例
function getLib() {
    let lib: Lib = (() => {}) as Lib
    lib.version = '1.0'
    lib.doSomething = () => {}

    return lib
}

let lib1 = getLib()
lib1()
lib1.doSomething()

let lib2 = getLib()

let add1: (x: number, y: number) => number
add1 = (x, y) => {
    return x + y
}

console.log(add1(3,4))

let add3: Add = ((x, y) => { x + y }) as Add

interface Test {
    x: number;
    y: string
}
