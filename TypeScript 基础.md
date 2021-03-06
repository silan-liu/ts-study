@(大前端)
# TypeScript 基础
## TypeScript 环境配置

安装 `ts`：
```
// 全局安装 ts
npm install typescript -g
```

`tsc` 相关：
```
// 生成 tsconfig.json
tsc --init

// 将 ts 转成 js
tsc ./src/index.ts
```

工程环境相关：
```
// 初始化工程，-y 表示默认选择各个选项
npm init -y

// 安装 webpack 相关
npm i webpack webpack-cli webpack-dev-server -D

// 安装 ts-loader
npm i ts-loader typescript -D

// 将 html 模板设为网站首页，并将导出文件嵌入
npm i html-webpack-plugin -D

// 清除缓存
npm i clean-webpack-plugin -D

// 合并config
npm i webpack-merge -D
```

其中工程中 `webpack config` 相关的配置可查看：[webpack-config](https://github.com/silan-liu/ts-study/tree/master/ts_demo/build)。

启动 `webpack-server`，浏览器打开 `http://localhost:8080/`。
```
// dev
npm run start

// pro
npm run build
```

具体 `scripts` 配置可查看 [scripts](https://github.com/silan-liu/ts-study/blob/f7694fe5f5ead1d832c3f1876c0ba8d7dfcf1ee1/ts_demo/package.json#L6)。

完整工程 `demo` 地址[在此](https://github.com/silan-liu/ts-study/tree/master/ts_demo)，其中也包括下面基础部分的代码。

## 变量类型
1. 原始类型

	```
	let bool: boolean = false
	let num: number = 3
	let str: string = 'as'
	```

2. 数组

	```
	let arr1: number[] = [1, 2, 3]
	
	// 泛型
	let arr2: Array<number> = [1, 2, 3]
	
	// 联合类型，数组元素可以是 number/string
	let arr3: Array<number | string> = [1, 2, 3, '4']
	```
3. 元组
	
	```
	let tuple: [number, string] = [0, '1']
	console.log(tuple[0])
	```
	
4. 函数
	
	```
	let addFun = (x: number, y: number): number => x + y
	
	// 函数定义
	let compute: (x: number, y: number) => number
	
	// 实现
	compute = (x, y) => x + y
	```

5. 对象
	
	```
	let obj: object = {x: 1, y: 3}
	
	// 这样才能修改，需声明具体类型
	let obj1: {x: number, y: number} = {x: 1, y: 3}
	obj1.x = 4
	```

6. symbol，表示具有唯一值
	```
	let s1: symbol = Symbol()
	```
7. undefined, null
	```
	// 只能被赋值为自身
	let un: undefined = undefined
	let nu: null = null
	```
8. void
	
	没有返回类型。
	
	```
	let noReturn = () => {}
	```
9. any，任意类型
	```
	let x
	x = 1
	x = 'a'
	x = () => {}
	```

10. never，永远不会返回的类型
	```
	// 抛出异常
	let error = () => {
	    throw new Error('error')
	}
	
	// 死循环
	let endless = () => {
	    while(1) {}
	}
	```

## 枚举
### 数字枚举

即枚举值是数字。

```
// 数字枚举，反向映射
enum Role {
    Reporter = 1,
    Developer,
    Maintainer,
    Owner,
    Guest
}
```
### 字符串枚举

即枚举值是字符串。

```
// 字符串枚举
enum Message {
    Success = '成功',
    Failure = '失败'
}
```

### 异构枚举，混合不同类型

可混合不同类型的值。

```
// 异构枚举，混合不同类型
enum Answer {
    N = 1,
    Y = 'yes'
}
```

### 常量枚举与计算枚举

常量枚举，在编译时会被移除，减少代码量。

```
// 常量枚举，在编译时会被移除，减少代码
const enum Month {
    Jan,
    Feb,
    Mar
}

// 直接被替换成了常量，即 [0, 1, 2]
let month = [Month.Jan, Month.Feb, Month.Mar]
```

计算枚举，在使用时才会真正计算。

```
enum Char {
    // const，常量枚举
    a,
    b = Char.a,
    c = 1 + 3,

    // 计算枚举，在使用时进行计算
    d = '123'.length,
    e = Math.random()
}
```

### 枚举类型

可将变量定义为枚举类型及枚举成员类型。

```
// 枚举类型
enum E { a }
enum F { a = 0, b = 1 }
enum G { a = 'apple', b = 'banana' }
```

定义为枚举类型，但不同类型不能进行比较。

```
let e: E = 1
let f: F = 2

// e === f，报错。
```

定义为枚举成员类型：

```
// 枚举成员类型
let e1: E.a = 1
let e2: F.b = 2
let e3: E.a = 3

// 相同类型可进行比较
e1 ===e3
```

字符串枚举类型，只能取其枚举值。

```
// 字符串枚举类型只能赋值其枚举选项
let g1: G = G.a
let g2: G = G.b

let g3: G = 'fff'	// 报错
```

## 函数
### 声明与定义

1. 常规定义

	```
	function add_1(x: number, y: number) {
	    return x + y
	}
	```

2. 先声明方法，后定义实现

	```
	let add1: (x: number, y: number) => number
	add1 = (x, y) => {
	    return x + y
	}
	
	console.log(add1(3,4))
	```

3. 通过 `type` 声明函数别名

	与 `2` 类似，只不过定义了别名。

	```
	// 函数别名
	type Add = (x: number, y: number) => number
	
	// 定义
	let add: Add = (a, b) => a + b
	```

4. 通过 `interface` 定义

	```
	interface Add {
	    (x: number, y: number): number
	}
	
	let add: Add = ((x, y) => { x + y }) as Add
	
	add(1, 2)
	```

### 函数参数

1. 可选参数。可不传，但必须在必选参数之后。

	```
	// 可选参数
	function add_2(x: number, y?: number) {
	    return y? x + y: x
	}
	
	add_2(3)
	```

2. 参数可设置默认值。

	* 在必选参数前，默认值不可省略，需传入 undefined 获取默认值；
	* 必选参数后，可不传

	```
	// 默认参数
	function  add_6(x: number, y = 0, z: number, q = 3) {
	    return x + y + z + q
	}
	
	// 要让 y = 0，必须传入 undefined
	add_6(1, undefined, 2)
	```

3. 剩余参数，函数参数个数不确定的情况。

	```
	// 剩余参数，参数个数不确定
	function add_3(x: number, ...rest: number[]) {
	    return x + rest.reduce((pre, cur) => pre + cur)
	}
	```

### 方法重载

方法重载指同名方法，但参数个数或类型不同。相似功能的函数，可使用同一个函数。

`ts` 中会查询重载列表，去匹配函数定义。

```

// 函数重载列表
// 参数为 number 数组，返回 number
function add_4(...rest: number[]): number

// 参数为 string 数组，返回 string
function add_4(...rest: string[]): string

// 在类型最宽泛的版本中重载
// 相当于定义一个通用的函数，在里面判断类型后，做处理
function add_4(...rest: any): any {
    let first = rest[0]
    if (typeof first === 'string') {
        return rest.join('')
    }

    if (typeof first === 'number') {
        return rest.reduce((pre: number, cur: number) =>  pre + cur)
    }
}

add_4(1, 2, 3)
add_4('a', 'b', 'c')
```

## 接口
### 函数类型

```
interface Add {
    (x: number, y: number): number
}
```

### 对象类型

```
interface List {
	// 只读
    readonly id: number;
    name: string;
	
	// 可选
    age?: number;
}

let l1 = {id: 1, name: 'a', age: 2}

// 由于 age 可选，可不传入
let l2 = {id: 2, name: 'b'}

```

### 混合类型

接口中可以有不同类型。

```
// 混合类型接口，其定义了一个函数，再添加了属性和一个方法
interface Lib {
	// 无返回值函数
    (): void;
	
	// 属性
    version: string;
	
	// 无返回值方法
    doSomething(): void;
}

// 需要类型断言，不然报错
let lib: Lib = (() => {}) as Lib
lib.version = '1.0'
lib.doSomething = () => {}
```

### 索引签名

表示可以用某种类型的 `key` 来进行索引，返回某种类型的值。跟 `map` 中的 `key/value` 类似。

```
// 用数字索引，返回字符串，可以理解成字符串数组
interface StringArray {
    [index: number]: string
}

let strings1 = ['a', 'b', 'c']
let strings2 = [0: 'a', 3: 'b', 4: 'c']

console.log(strings2[0])
console.log(strings2[4])

// 用字符串索引，返回字符串
interface Names {
    [x: string]: string
}

let names: Names = {'a': 'a1'}
console.log(names['a']) // or names.a
```

但是如果定义了索引签名，其他的字段必须兼容签名返回类型。

## 类
### 定义

使用 `class` 定义类。

> 注意： 如果实例属性没有默认值，需要在构造函数中进行初始化

定义：
```
class Dog {
    constructor(name: string) {
        super()
        this.name = name
    }
    name: string
}
```

实例化：
```
let dog = new Dog("what")
console.log(dog.name)
```

1. 若实例属性有默认值，则不需要初始化。

	```
	class Dog {
	    name: string = "hello"
	}
	```
2. 可声明为可选属性，则不用在构造函数初始化。

	```
	class Dog {
	    name?: string
	}
	```


### 继承

使用 `extends` 来继承。

```
// 继承
class Husky extends Dog {
    constructor(name: string, color: string) {
        super(name)
        this.color = color
    }

	color: string
}
```

#### 类型修饰符

可以用来修饰属性、方法、构造函数参数。

* public，默认，均可访问。
* protected，内部、子类可以访问。
* private，内部可以访问。

当用来修饰构造函数参数时，会自动转换为实例属性，省去声明的步骤。

```
// 继承
class Husky extends Dog {
    // color 参数有修饰符，会自动变成实例属性
    constructor(name: string, public color: string) {
        super(name)
		
        this.color = color
    }
}
```

#### 静态方法与属性

用 `static` 修饰。可直接用类名调用。

```
class Test {
    // 实例属性
    name: string = "hello"

    // 静态成员，可被子类继承
    static food: string = 'bones'

    // 静态方法
    static test() {}
}

// 静态成员
Test.food

// 静态方法
Test.test()
```

#### readonly

用来修饰实例属性，表示不可修改。

### 抽象与多态
#### 抽象类

使用 `abstract` 修饰，不可被实例化。

抽象类中可定义`方法实现`或者`抽象方法`，抽象方法同样用 `abstract` 修饰，表示子类需实现该方法。

```
// 抽象类
abstract class Animal {
	// 定义了方法实现
    eat() {
        console.log('eat')
    }
	
	// 抽象方法，需子类实现
   abstract sleep(): string
}
```

```
class Dog extends Animal {
	// 实现抽象方法
    sleep(): string {
        return "dog sleep"
    }
}
```

#### 多态

多态即对同一种行为可以产生不同的表现。多态可以使用继承来实现。

接上面的例子，定义 `Cat` 继承自 `Animal`。

```
class Cat extends Animal {
    constructor() {
        super()
    }

	// 实现抽象方法
    sleep(): string {
        return "cat sleep"
    }
}
```

对于 `sleep` 这个行为，不同的类型会有不同的表现。

```
let cat = new Cat()
let dog = new Dog()

// 多态
let animals: Animal[] = [dog, cat]
animals.forEach((value) => {
    console.log(value.sleep())
})

// 输出
dog sleep
cat sleep
```

#### 链式调用

链式调用即可以用`.`一直进行调用，比如 `dog.eat().sleep().food`。这就需要在方法中返回其自身实例。

```
// 链式调用
class WorkFlow {
    step1() {
        return this
    }

    step2() {
        return this
    }

    step3() {
        console.log('step3')
    }
}

let workFlow = new WorkFlow()
workFlow.step1().step2().step3()
```

#### 类与接口

1. 接口只能约束类中的公有成员和方法。
	```
	interface Human {
	    // 约束公有成员，需在类中实现
	    name: string
	    eat(): void
	}
	```

2. 类实现接口，需实现属性和方法。

	```
	class Asian implements Human {
	    constructor(name: string) {
	        this.name = name
	    }
	
	    name: string
	    eat() {}
	}
	```

3. 接口可继承接口。

	```
	// 接口继承
	interface Man extends Human {
	    run(): void
	}
	
	interface Child {
	    cry(): void
	}
	
	interface Boy extends Man, Child {
	}
	
	let boy: Boy = {
	    name: 'ww',
	    run() {},
	    eat() {},
	    cry() {}
	}
	```

4. 接口可继承类，表示抽取类中的属性和方法，包括公有/私有/受保护类型。

	```
	class Auto {
	    state = 1
	    test() {
	        console.log('Auto')
	    }
	}
	
	// 接口继承类，抽离了 Auto 中的属性和方法，公有/私有/受保护
	interface AutoInterface extends Auto {
	}
	
	class C implements AutoInterface {
	    state = 1
	    test() {
	        console.log('test')
	    }
	}
	```

### 泛型

泛型可以使函数和类支持多种数据类型，增加程序可扩展性。同时不必重写多条函数重载，类型约束的控制更加灵活。

#### 泛型函数

定义泛型函数 `log`，其泛型类型为 `T`。
```
function log<T>(value: T): T {
    console.log(value)
    return value
}
```

使用时指明类型：

```
// 指明类型
log<string>('fsd')
log<string[]>(['a', 'b'])
```

使用时不指明类型，编译器进行类型推断：

```
// 类型推断
log('dd')
log(1)
```

别名函数泛型：
```
// 别名函数
type Log = <T>(value: T) => T
let myLog: Log = log

myLog('hello')
```

#### 泛型接口

接口也可以是泛型。

```
// 泛型接口，定义函数
interface LogInterface {
    <T>(value: T): T
}

// 指定默认类型，`T` 在最外层进行限制，约束接口的所有成员
interface LogInterface1<T = number> {
    (value: T): T
    name: T
}
```

使用：

```
let log1: LogInterface = log
log1('jel')
```

#### 泛型类

类中也可以使用泛型。

```
// 泛型类，不能作用于静态成员
class Logger<T> {
    run(value: T) {
        console.log(value)
        return value
    }
}

let logger1 = new Logger<number>()
logger1.run(1)
```

##### 泛型约束

对泛型进行约束，使得只有满足条件的类型可传入。

```
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

// logger(2) // 无 length 属性，不能传入
```

### 类型检查
#### 类型兼容性
##### 接口兼容性
成员名相同的情况下，成员个数少的兼容个数多的。

```
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

// 不可以
// y1 = x1 
```

##### 函数兼容性
需满足三个条件。

* 参数个数兼容，参数多兼容参数少。
* 参数类型兼容，若是对象类型，成员多兼容成员少。
* 返回值兼容，若是对象类型，成员少兼容成员多。

###### 参数个数

参数多兼容参数少。

```
type Handler = (a: number, b: number) => void
function hof(handler:Handler) {
    return handler
}

// 1. 参数个数，参数多的可以兼容参数少的
let handler1 = (a: number) => {}
hof(handler1)

let handler2 = (a: number, b: number, c: number) => {}
// hof(handler2)，不可以兼容
```

固定参数、可选参数、剩余参数之间的兼容：

* 固定参数兼容可选和剩余参数
* 可选参数不兼容固定和剩余参数
* 剩余参数可以兼容固定参数和可选参数

```
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
```

###### 参数类型

对象类型兼容，成员多的兼容成员少的。

```
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
```

###### 返回值类型

返回值类型兼容，成员少的兼容成员多的。

```
let f4 = () => ({name: 'Alice'})
let f5 = () => ({name: 'Alice', location: 'dd'})
```

#### 枚举类型兼容

不同枚举类型不兼容，数字枚举与 `number` 完全兼容。

```
enum Fruit { Apple, Banana }
enum Color { Red, Yellow }

let fruit: Fruit.Apple = 3
let n: number = fruit
```

#### 类兼容

类兼容性，构造函数和静态成员不做比较，如果有同名同类型私有变量，不兼容。

```
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
```

#### 泛型兼容
##### 接口
泛型兼容性，泛型被成员使用才会影响兼容性。
```
// T 被成员使用才会影响兼容性
interface Empty<T> {
    value: T
}

let object1: Empty<string> = {value: 'a'}
let object2: Empty<number> = {value: 1}

// object1 = object2   // 不可以
```

##### 函数
泛型函数兼容，定义相同，没有指定具体类型，则兼容。
```
let l1 = <T>(value: T): T => {
    return value
}

let l2 = <U>(value: U): U => {
    return value
}

l1 = l2
```

### 类型保护

当遇到变量无法确定属于哪个类型时，需要用到类型判断。

假设我们定义了 `Java` 和 `JavaScript` 两个类，需要正确的调用实例所属的方法。

```
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
```

有如下四种方法判断。

#### instanceof

判断实例属于哪个类。

```
function getLanguage(type: Type) {
    let lang = type === Type.Strong ? new Java() : new JavaScript()
    // instanceof
    if (lang instanceof Java) {
        lang.helloJava()
    } else {
        lang.helloJavaScript()
    }
}
```
#### in

判断变量是否属于某个对象。

```
if ('java' in lang) {
    lang.helloJava()
} else {
    lang.helloJavaScript()
}
```
#### typeof

判断类型。

```
// typeof
if (typeof x === 'number') {
    console.log(x.toFixed(2))
    console.log('x is number')
} else  {
    console.log(x.length)
    console.log('x is string')
}
```

#### 函数类型断言

首先定义断言函数：

```
// 返回值：类型谓词
function isJava(lang: Java | JavaScript): lang is Java {
    return ((lang as Java).helloJava) !== undefined
}
```

进行判断：

```
// 函数类型断言
if (isJava(lang)) {
    lang.helloJava()
} else {
    lang.helloJavaScript()
}
```

