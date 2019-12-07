// 抽象类
abstract class Animal {
    eat() {
        console.log('eat')
    }

    abstract sleep(): string
}

class Dog extends Animal {
    constructor(name: string) {
        super()
        this.name = name
    }

    name: string
    run() {
        console.log('run')
    }

    sleep(): string {
        return 'dog sleep'
    }

    protected pro() {}

    private pri() {}

    static test() {

    }

    // 初始化
    readonly legs: number = 4

    // 静态成员，可被子类继承
    static food: string = 'bones'
}

class Cat extends Animal {
    constructor() {
        super()
    }

    sleep(): string {
        return "cat sleep"
    }
}

let cat = new Cat()

// 不包括实例属性
console.log(Dog.prototype)

let dog = new Dog('hello')
console.log(dog)
console.log(Dog.food)
dog.eat()
Dog.test()

// 多态
let animals: Animal[] = [dog, cat]
animals.forEach((value) => {
    console.log(value.sleep())
})

// 继承
class Husky extends Dog {
    // 参数有修饰符，会自动变成实例属性
    constructor(name: string, public color: string) {
        super(name)

        this.color = color
    }

    test() {
        this.pro()
    }
}

let husky = new Husky('a', 'red')
husky.test()

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

class MyFlow extends WorkFlow {
    next() {
        return this
    }
}

let myFlow = new MyFlow()
myFlow.next().step1().step2().step3()

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