
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

interface Lib {
    (): void;
    version: string;
    doSomething(): void;
}

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

