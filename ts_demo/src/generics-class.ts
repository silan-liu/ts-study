// 泛型类，不能作用静态成员
class Logger<T> {
    run(value: T) {
        console.log(value)
        return value
    }
}

let logger1 = new Logger<number>()
logger1.run(1)

// 类型约束
interface Length {
    length: number
}

// 约束 T 需要有 length 属性
function logger<T extends Length>(value: T): T {
    return value
}

logger('d')
logger([1,2,3])
