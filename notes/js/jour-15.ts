abstract class Animal {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age; // Assignation correcte
  }

  abstract parler(): void;
}

class Dog extends Animal {
  parler() {
    console.log("wouf wouf !");
  }
}

const Eden = new Dog("Eden", 15);
console.log(Eden.parler());
