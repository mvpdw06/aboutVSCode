class Dog {
    constructor(age, name) {
        this.age = age;
        this.name = name;
    }
    speak() {
        console.log(`${this.name}: I am speaking now, my age is ${this.age}`);
    }
}

module.exports = Dog;