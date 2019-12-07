function log<T>(value: T): T {
    console.log(value)
    return value
}

// 指明类型
log<string>('fsd')
log<string[]>(['a', 'b'])

// 类型推断
log('dd')
log(1)

// 别名函数
type Log = <T>(value: T) => T
let myLog: Log = log

myLog('d')

// 泛型接口
interface LogInterface {
    <T>(value: T): T
}

// 指定默认类型
interface LogInterface1<T = number> {
    (value: T): T
    name: T
}

let log1: LogInterface = log
log1('jel')
