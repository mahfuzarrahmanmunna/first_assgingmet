# The Four Pillars of OOP in TypeScript: Building Scalable Applications

## Introduction

As applications grow in size and complexity, managing logic becomes a significant challenge. Object-Oriented Programming (OOP) provides a paradigm to structure code using objects that interact with one another. TypeScript, with its strong typing system, implements the four pillars of OOP—Inheritance, Polymorphism, Abstraction, and Encapsulation—exceptionally well. These pillars help developers organize code logic, reduce complexity, and build scalable systems.

## 1. Encapsulation

Encapsulation is the bundling of data and methods that operate on that data within a single unit (class) and restricting access to some of the object's components. In TypeScript, we use `public`, `private`, and `protected` modifiers to achieve this.

This prevents external code from arbitrarily changing the internal state of an object, which helps prevent bugs.

```typescript
class BankAccount {
  private balance: number;

  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  public deposit(amount: number): void {
    this.balance += amount;
  }

  public getBalance(): number {
    return this.balance;
  }
}
```

Here, `balance` is `private`. It cannot be modified directly from outside the class, ensuring that the balance can only change via valid operations like `deposit`.

## 2. Inheritance

Inheritance allows a class to derive properties and characteristics from another class. This promotes code reusability. In TypeScript, we use the `extends` keyword.

For example, if we have a generic `Animal` class, a `Dog` class can inherit its common logic (like moving or eating) without rewriting code.

```ts
class Animal {
  constructor(public name: string) {}

  move(distanceInMeters: number): void {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}

class Dog extends Animal {
  bark(): void {
    console.log("Woof! Woof!");
  }
}

const dog = new Dog("Buddy");
dog.move(10); // Inherited method
dog.bark(); // Own method
```

## 3. Polymorphism

Polymorphism allows objects of different classes to be treated as objects of a common superclass. It often involves method overriding where a subclass provides a specific implementation of a method that is already defined in its superclass.

This allows for flexible code design. You can write a function that accepts the parent `Animal` type, and it will work correctly whether you pass a `Dog`, a `Cat`, or a `Bird`.

```ts
class Cat extends Animal {
  move(distanceInMeters: number): void {
    console.log("The cat is sneaking...");
    super.move(distanceInMeters);
  }
}

function makeAnimalMove(animal: Animal) {
  animal.move(5); // Polymorphic behavior
}
```

## 4. Abstraction

Abstraction involves hiding complex implementation details and showing only the necessary features of an object. In TypeScript, we can use `abstract` classes. An abstract class cannot be instantiated directly; it must be inherited by subclasses.

This is useful for defining a base contract that other classes must follow.

```ts
abstract class Employee {
  constructor(
    public name: string,
    public id: number,
  ) {}

  abstract calculateSalary(): number; // Subclass must implement this
}

class FullTimeEmployee extends Employee {
  calculateSalary(): number {
    return 50000;
  }
}
```

## Conclusion
By leveraging these four pillars of OOP, TypeScript developers can manage logic effectively in large-scale projects. Encapsulation protects data, Inheritance reuses code, Polymorphism provides flexibility, and Abstraction hides complexity. Together, they create a robust architecture that is easier to maintain, test, and expand.
