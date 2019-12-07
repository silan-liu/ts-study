interface List {
    readonly id: number;
    name: string;
    age?: number;
}

interface Result {
    data: List[]
}

function render(result: Result) {
    result.data.forEach((value) => {
        console.log(value.id, value.name)
        if (value.age) {
            console.log(value.age);
        }

        value.name = "d"
    })
}

let result = {
    data: [
        {id: 1, name: 'a', age: 2},
        {id: 2, name: 'b'}
    ]
}

render(result)

interface StringArray {
    [index: number]: string
}

let chars: StringArray = {0: '1'}
console.log(chars[0])

let strings2 = {0: 'a', 3: 'b', 4: 'c'}
console.log(`aa:${strings2[4]}`)

interface Names {
    [x: string]: string
}

let names: Names = {'a': 'a1'}
console.log(`names: ${names['a']}`)

let l = {id: 1, name: 'a', age: 2}

console.log(l.name)
