// 类型注解
let a: string = 'hello'

// 原始类型
let bool: boolean = false
let num: number = 3
let str: string = 'as'

// 数组
let arr1: number[] = [1, 2, 3]

// 泛型
let arr2: Array<number> = [1, 2, 3]

// 联合类型，数组元素可以是 number/string
let arr3: Array<number | string> = [1, 2, 3, '4']

// 元组
let tuple: [number, string] = [0, '1']
console.log(tuple[0])

// 函数
let addFun = (x: number, y: number): number => x + y

// 函数定义
let compute: (x: number, y: number) => number

// 实现
compute = (x, y) => x + y

// 对象
let obj: object = {x: 1, y: 3}

// 这样才能修改，需声明具体类型
let obj1: {x: number, y: number} = {x: 1, y: 3}
obj1.x = 4

// symbol，表示具有唯一值
let s1: symbol = Symbol()

// undefined, null
// 只能被赋值为自身
let un: undefined = undefined
let nu: null = null

// void，没有返回类型
let noReturn = () => {}

// any，任意类型
let x
x = 1
x = 'a'
x = () => {}

// never，永远不会返回的类型
// 抛出异常
let error = () => {
    throw new Error('error')
}

// 死循环
let endless = () => {
    while(1) {}
}
