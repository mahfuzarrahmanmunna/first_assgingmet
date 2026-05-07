function filterEvenNumbers(numbers: number[]): number[] {
  return numbers.filter((num) => num % 2 === 0);
}

// revurse String
const reverseString = (str: string): string => {
  return str.split("").reverse().join("");
};



// string or number
type StringOrNumber = string | number;
const checkType = (input: StringOrNumber): string => {
  if (typeof input === "string") {
    return "String";
  }
  return "Number";
};


// soluations four
function getProperty<T, K extends keyof T>(obj: T, key: K):T[K]{
  return obj[key]
}


// soluations five 
interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

const toggleReadStatus = (book: Book):Book & {isRead: boolean}=>{
  return {...book, isRead: true}
}
const myBook = {
  title: "TypeScript Guide",
  author: "Jane Doe",
  publishedYear: 2024,
};



// solutions six
class Person {
  public name: string;
  public age: number;
  constructor(
    name: string,
    age: number,
  ) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;
  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }
  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}
// const student = new Student("Alice", 20, "A");
// console.log(student.getDetails())


// problem seven
function getIntersection(arr1:number[], arr2:number[]):number[]{
  return arr1.filter(num =>arr2.includes(num));
}
// console.log(getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));