class student {
    constructor(name, email, birthdate, score) {
        this.name = name;
        this.email = email;
        this.birthdate = birthdate;
        this.score = score;
    }
}

const student1 = new student ("andi", "andi@gmail.com", "1995-01-01", 80)
const student2 = new student ("budi", "budi@gmail.com", "1996-01-01", 85)
const student3 = new student ("cahyo", "cahyo@gmail.com", "1997-01-01", 90)

const arrStudent = [student1, student2, student3];
// console.log(arrStudent)
// console.log(Math.min(1, 2, 3, 4, 5))

function convertAge(date) {
    let birthdate = new Date(date).getTime()
    let now = new Date().getTime()
    let diff = now - birthdate
    let res = Math.floor(diff / (1000 * 60 * 60 * 24) / 365)
    // console.log(res)
    
    return res
}
// convertAge("1995-01-01")

function  calculate(arr) {
    let maxScore = Math.max(...arr.map(item => item.score))
    let minScore = Math.min(...arr.map(item => item.score))
    let avgScore = arr.map(item => item.score).reduce((a, b) => a + b) / arr.length

    let maxAge = Math.max(...arr.map(item => convertAge(item.birthdate)))
    let minAge = Math.min(...arr.map(item => convertAge(item.birthdate)))
    let avgAge = arr.map(item => convertAge(item.birthdate)).reduce((a, b) => a + b) / arr.length

    return {
        score: {
            max: maxScore,
            min: minScore,
            avg: avgScore
        },
        age: {
            max: maxAge,
            min: minAge,
            avg: avgAge
        }
        
    }

}
console.log(calculate(arrStudent))
console.log("----------")

class Product {
    constructor(nama, price) {
        this.nama = nama
        this.price = price
    }
}

const product1 = new Product('apple', 10000) // { name: 'apple', price: 10000 }
const product2 = new Product('banana', 5000)
const product3 = new Product('melon', 15000)

class Transaction {
    #total = 0
    products = [] // [{ name: 'apple', price: 10000, qty: 3 }]

    addToCart(item, jumlah) {
        item.qty = jumlah // { name: 'apple', price: 10000, qty: 3}
        this.products.push(item)
    }

    getTotal() {
        this.products.forEach((item) => {
            this.#total += item.price * item.qty
            console.log(`${item.nama} x ${item.qty} = ${item.price * item.qty}`)
        })
        console.log('-------------------------')
        console.log(`Total : ${this.#total}`)
    }

    checkout(money) {
        if (money < this.#total) {
            throw new Error("Uang anda tidak cukup")
        } else {
            // this.getTotal()
            console.log(`Cash : ${money}`)
            console.log(`Return : ${money - this.#total}`)
            console.log(`--- thank you ---`)
        }
    }
}

const transaction1 = new Transaction()

transaction1.addToCart(product1, 3) 
transaction1.addToCart(product3, 1)
transaction1.addToCart(product2, 5)
transaction1.getTotal()
transaction1.checkout(100000)

// console.log(transaction1.products)