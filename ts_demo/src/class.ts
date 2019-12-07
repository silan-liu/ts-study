class Dog {
    constructor(name: string) {
        this.name = name
    }

    name: string
    run() {
        console.log('run')
    }
    protected pro() {}
    private _test() {}

    // 初始化
    readonly legs: number = 4

    // 静态成员，可被子类继承
    static food: string = 'bones'
}

// 不包括属性
console.log(Dog.prototype)

let dog = new Dog('hello')
console.log(dog)
console.log(Dog.food)

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
