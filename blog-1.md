# DRY Code with Typescript: Leveraging Pick and Omit

### Introduction
In software development, the DRY (Don't Repeat Yourself) principle is a golden rule. Repetitive code leads to maintenance nightmares, if you change a struture in one place, you must remember to change it everywhere else. In Typescript, interfacces often define the shape of our data. However, different parts of an application often need slightly different variations of the same data shape. This is where the utility types Pick and Omit become powerful tools to prevent code duplication.

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
Now, consider two scenarios:
1. When a user register, we don't want them to send and id or createdAt date;
2. When we display a public profile, we definitely do not want to expose the password.


A naive approach would be to create new interfaces for every scenario, copying properties manually:
``ts
    interface UserRegistrationDTO{
        name: string;
        email: string:
        password: string;
    }
``
This creates duplication. If we change the ``email`` type in `user`