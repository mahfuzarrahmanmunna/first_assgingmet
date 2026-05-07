# DRY Code with Typescript: Leveraging Pick and Omit

### Introduction
In software development, the DRY (Don't Repeat Yourself) principle is a golden rule. Repetitive code leads to maintenance nightmares, if you change a struture in one place, you must remember to change it everywhere else. In Typescript, interfacces often define the shape of our data. However, different parts of an application often need slightly different variations of the same data shape. This is where the utility types Pick and Omit become powerful tools to prevent code duplication.

### The problem of Duplication
```ts
interface User{
    id: number;
    name: string;
    email: string;
    password: string;
    createdAt: Date;
}
```
Now, consider two scenarios:
1. When a user register, we don't want them to send and id or createdAt date;
2. When we display a public profile, we definitely do not want to expose the password.


A naive approach would be to create new interfaces for every scenario, copying properties manually: <br/>
```ts
    interface UserRegistrationDTO{
        name: string;
        email: string:
        password: string;
    }
```
This creates duplication. If we change the ``email`` type in `User`, we have to update it manually in ``UserRegistrationDTO``.

## Solution: Using Pick and Omit
TypeScript provides built-in utility types to construct new types by picking or omitting specific properties from an existing type.


## Using Omit to Exclude Data
The `Omit` utility creates a new type by picking all properties from a type and then removing a specific set of keys. This is perfect for our public profile scenario where we must exclude sensitive data.

```ts
type PublicUser = Omit<User, 'password' | 'id' | 'createdAt'>;

// PublicUser is effectively:
// {
//   name: string;
//   email: string;
// }
```
If we decide to add an ``address`` field to the master ``User`` interface, ``PublicUser`` updates automatically to include it (unless explicitly omitted), ensuring consistency across the application.


## Using Pick to Select Data
The `Pick` utility constructs a type by picking the set of properties `Keys` from `Type`. This is ideal for input forms where a user can only update specific fields.


```ts
type UserProfileUpdate = Pick<User, 'name' | 'email'>;

// Usage example:
function updateUserProfile(id: number, data: UserProfileUpdate) {
    // Logic to update only name and email
}
```
## Conclusion
Pick and Omit are essential tools in a TypeScript developer's toolkit. By allowing you to create "slices" of master interfaces, they help you adhere to the DRY principle. Instead of maintaining multiple similar interfaces, you maintain a single source of truth and derive variations from it. This results in cleaner, more maintainable, and type-safe code.

