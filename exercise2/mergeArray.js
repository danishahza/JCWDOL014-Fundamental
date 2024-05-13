// ● Create a function to merge two array of student data and remove duplicate data
// ● Student data : name & email
// ● Example :
// Array1 → [
// { name: ‘Student 1’, email : ‘student1@mail.com’ },
// { name: ‘Student 2’, email : ‘student2@mail.com’ }
// ]
// Array2 → [
// { name: ‘Student 1’, email : ‘student1@mail.com’ },
// { name: ‘Student 3’, email : ‘student3@mail.com’ }
// ]
// ● Result :
// ArrayResult → [
// { name: ‘Student 1’, email : ‘student1@mail.com’ },
// { name: ‘Student 2’, email : ‘student2@mail.com’ },
// { name: ‘Student 3’, email : ‘student3@mail.com’ }
// ]

let arr1 = [
    {name: 'Student 1', email: 'student1@gmail.com'},
    {name: 'Student 2', email: 'student2@gmail.com'}
]

let arr2 = [
    {name: 'Student 1', email: 'student1@gmail.com'},
    {name: 'Student 3', email: 'student3@gmail.com'}
]

function merge(input1, input2) {
    let combine = [...input1, ...input2]
    let res = []

    combine.forEach((item) => {
        let stringed = JSON.stringify(item)
        if(res.includes(stringed) == false) {
            res.push(stringed)
        }
    })

    return res.map(item => JSON.parse(item))

}

console.log(merge(arr1, arr2))