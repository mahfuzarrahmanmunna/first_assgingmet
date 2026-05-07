# DRY Code with Typescript: Leveraging Pick and Omit

### Introduction
In software development, the DRY (Don't Repeat Yourself) principle is a golden rule. Repetitive code leads to maintenance nightmares; if you change a struture in one place, you must remember to change it everywhere else. In Typescript, interfacces often define the shape of our data. However, different parts of an application often need slightly different variations of the same data shape. This is where the utility types Pick and Omit become powerful tools to prevent code duplication.

### The problem of Duplication
``
interface User{
    id: number;
    name: string;
    email: string;
    password: string;
    createdAt: Date;
}
``