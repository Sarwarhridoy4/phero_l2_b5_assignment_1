function formatString(input: string, toUpper: boolean = true): string {
  let result;
  if (input && toUpper) {
    result = input.toUpperCase();
  } else {
    result = input.toLowerCase();
  }
  return result;
}

// output based on cases

const result1 = formatString("Hello to next level Development");
console.log("Result when default:", result1);
const result2 = formatString("Hello to next level Development", true);
console.log("Result when true :", result2);
const result3 = formatString("Hello to next level Development", false);
console.log("Result when false :", result3);

function filterByRating(
  items: { name: string; rating: number }[]
): { name: string; rating: number }[] {
  return items.filter((item) => item.rating >= 4);
}

// Example usage:
const items = [
  { name: "Tv", rating: 4 },
  { name: "Cooler", rating: 2 },
  { name: "Vox Wagon", rating: 5 },
];

const filteredItems = filterByRating(items);
console.log("Filtered Items:", filteredItems);

function concatenateArrays<T>(...arrays: T[][]): T[] {
  return arrays.flat();
}

// Example usage:
const array1 = [1, 2, 5];
const array2 = [4, 9, 6];
const array3 = [0, 8, 9];

const concatenatedArray = concatenateArrays(array1, array2, array3);
console.log("Concatenated Array:", concatenatedArray);

class Vehicle {
  private make: string;
  private year: number;

  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }

  getInfo(): string {
    return `Make: ${this.make}, Year: ${this.year}`;
  }
}

class Car extends Vehicle {
  private model: string;

  constructor(make: string, year: number, model: string) {
    super(make, year);
    this.model = model;
  }

  getModel(): string {
    return `Model: ${this.model}`;
  }
}

// Example usage:
const myCar: Car = new Car("Tesla", 2020, "EV404");
console.log(myCar.getInfo());
console.log(myCar.getModel());

function processValue(value: string | number): number {
  if (typeof value === "string") {
    return value.length;
  } else if (typeof value === "number") {
    return value * 2;
  }
  throw new Error("Invalid input type");
}

// Example usage:
console.log(processValue("hello"));
console.log(processValue(10));

interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  if (products.length === 0) {
    return null;
  }
  return products.reduce((max, product) =>
    product.price > max.price ? product : max
  );
}

// Example usage:
const products = [
  { name: "Book", price: 240 },
  { name: "Paper", price: 10 },
  { name: "Bag", price: 50 },
];

const mostExpensiveProduct = getMostExpensiveProduct(products);
console.log("Most Expensive Product:", mostExpensiveProduct);

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function getDayType(day: Day): string {
  switch (day) {
    case Day.Saturday:
    case Day.Sunday:
      return "Weekend";
    default:
      return "Weekday";
  }
}

// Example usage:
console.log(getDayType(Day.Monday));
console.log(getDayType(Day.Saturday));

async function squareAsync(n: number): Promise<number> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (n < 0) {
        reject(new Error("Negative number not allowed"));
      } else {
        resolve(n * n);
      }
    }, 1000);
  });
}

// Example usage:
squareAsync(4).then(console.log);
squareAsync(-3).catch(console.error);
