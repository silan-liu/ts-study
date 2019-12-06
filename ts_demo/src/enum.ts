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

interface Names {
    [x: string]: string
}

let names: Names = {'a': 'a1'}
