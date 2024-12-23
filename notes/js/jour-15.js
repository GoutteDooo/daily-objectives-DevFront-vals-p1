class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age; // Assignation correcte
  }

  parler() {
    throw new Error("Cette méthoe doit être implémentée dans une sous-classe");
  }
}

class Dog extends Animal {
  parler() {
    console.log("wouf wouf !");
  }
}

const Eden = new Dog("Eden", 15);
Eden.parler();
