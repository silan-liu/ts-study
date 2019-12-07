interface Human {
    // 约束公有成员，需在类中实现
    name: string
    eat(): void
}

class Asian implements Human {
    constructor(name: string) {
        this.name = name
    }

    name: string
    eat() {}
}

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

class Bus extends Auto implements AutoInterface {

}

let c = new C()
c.test()