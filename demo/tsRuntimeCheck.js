//@ts-check

class Dog {
    /**
     * 
     * @param {number} age 
     * @param {string} name 
     */
    constructor(age, name) {
        this.age = age;
        this.name = name;
    }

    speak() {
        console.log(`${this.name}: I am speaking now, my age is ${this.age}`);
    }
}

// new Dog('aa', 'Corgi');