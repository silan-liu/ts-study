let s: string = 'a'

// 接口兼容性
interface X {
    a: any
    b: any
}

interface Y {
    a: any
    b: any
    c: any
}

let x1: X = {a: 1, b: 2}
let y1: Y = {a: 1, b: 2, c: 3}

// X 可兼容 Y，属性少的可以兼容属性多的
x1 = y1

// y1 = x1 // 不可以

// 函数兼容性
type Handler = (a: number, b: number) => void
function hof(handler:Handler) {
    return handler
}

// 1. 参数个数，参数多的可以兼容参数少的
let handler1 = (a: number) => {}
hof(handler1)

let handler2 = (a: number, b: number, c: number) => {}
// hof(handler2)，不可以兼容

let f1 = (p1: number, p2: number) => {}
let f2 = (p1?: number, p2?: number) => {}
let f3 = (...args: number[]) => {}
// 固定参数兼容可选和剩余参数
f1 = f2
f1 = f3

// 可选参数不兼容固定和剩余参数
// f2 = f1
// f2 = f3

// 剩余参数可以兼容固定参数和可选参数
f3 = f1
f3 = f2

// 2. 参数类型需要兼容

// 对象类型兼容，成员多的兼容成员少的
interface Point3D {
    x: number
    y: number
    z: number
}

interface Point2D {
    x: number
    y: number
}

let p3d = (point: Point3D) => {}
let p2d = (point: Point2D) => {}

p3d = p2d
// p2d = p3d //不可以

// 3. 返回值类型兼容，成员少的兼容成员多的
let f4 = () => ({name: 'Alice'})
let f5 = () => ({name: 'Alice', location: 'dd'})

// 函数重载兼容，目标类型兼容源类型
// 重载列表，目标类型
function overload(a: number, b: number): number
function overload(a: string, b: string): string

// 源类型
function overload(a: any, b: any): any {
}

// 枚举类型兼容
// 不同枚举类型不兼容，数字枚举与 number 完全兼容
enum Fruit { Apple, Banana }
enum Color { Red, Yellow }

let fruit: Fruit.Apple = 3
let n: number = fruit

// 类兼容性，构造函数和静态成员不做比较，如果有私有变量，不兼容
class A {
    constructor(a: number, b: number) {}
    id: number = 1
}

class B {
    static s = 1
    constructor(a: number) {}
    id: number = 1
}

let aa = new A(1, 2)
let bb = new B(1)

aa = bb
bb = aa


// 泛型兼容性，T 被成员使用才会影响兼容性
interface Empty<T> {
    value: T
}

let object1: Empty<string> = {value: 'a'}
let object2: Empty<number> = {value: 1}

// object1 = object2   // 不可以

// 泛型函数兼容，定义相同，没有指定具体类型
let l1 = <T>(value: T): T => {
    return value
}

let l2 = <U>(value: U): U => {
    return value
}

l1 = l2

// 结构，少兼容多
// 函数，多兼容少

// 类型保护
enum Type {
    Strong,
    Weak
}

class Java {
    helloJava() {
        console.log('helloJava')
    }

    java: any
}

class JavaScript {
    helloJavaScript() {
        console.log('helloJavaScript')
    }

    javascript: any
}

// 返回值：类型谓词
function isJava(lang: Java | JavaScript): lang is Java {
    return ((lang as Java).helloJava) !== undefined
}

function getLanguage(type: Type, x: number | string) {
    let lang = type === Type.Strong ? new Java() : new JavaScript()
    // instanceof
    if (lang instanceof Java) {
        lang.helloJava()
    } else {
        lang.helloJavaScript()
    }

    // in，属性是否属于某个对象
    if ('java' in lang) {
        lang.helloJava()
    } else {
        lang.helloJavaScript()
    }

    // typeof
    if (typeof x === 'number') {
        console.log(x.toFixed(2))
        console.log('x is number')
    } else  {
        console.log(x.length)
        console.log('x is string')
    }

    // 函数类型断言
    if (isJava(lang)) {
        lang.helloJava()
    } else {
        lang.helloJavaScript()
    }
}