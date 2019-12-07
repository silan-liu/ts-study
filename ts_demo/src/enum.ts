// 数字枚举，反向映射
enum Role {
    Reporter = 1,
    Developer,
    Maintainer,
    Owner,
    Guest
}

console.log(Role.Reporter)

// 字符串枚举
enum Message {
    Success = '成功',
    Failure = '失败'
}

// 异构枚举，混合不同类型
enum Answer {
    N,
    Y = 'yes'
}

enum Char {
    // const，常量枚举
    a,
    b = Char.a,
    c = 1 + 3,

    // 需要计算的枚举，在使用时进行计算
    d = '123'.length,
    e = Math.random()
}

// 常量枚举，在编译时会被移除，减少代码
const enum Month {
    Jan,
    Feb,
    Mar
}

// 直接被替换成了常量
let month = [Month.Jan, Month.Feb, Month.Mar]

// 枚举类型
enum E { a }
enum F { a = 0, b = 1 }
enum G { a = 'apple', b = 'banana' }

let e: E = 1
let f: F = 2

// 不同类型不能比较
// e === f

// 枚举成员
let e1: E.a = 1
let e2: F.b = 2
let e3: E.a = 3

// 都是 E.a 类型，可以比较
e1 === e3

// 字符串枚举类型只能赋值其枚举选项
let g1: G = G.a
let g2: G = G.b

console.log(e)
