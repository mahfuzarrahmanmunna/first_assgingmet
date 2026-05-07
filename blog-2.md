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