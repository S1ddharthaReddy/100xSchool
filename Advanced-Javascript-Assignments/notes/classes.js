
// simple type

// function sum(a, b){
//     return a + b;
// }

// console.log(sum(1,2));

// complex types - objects, arrays

// classes
// in javascript, classes are a way to define blueprints for creating
// objects 

class Shape {
    constructor(color){
        this.color = color;
    }

    paint() {
        console.log("painting with color " + this.color);
    }

    area() {
        throw new Error("The area method must be implemented in the subclass");
    }
}

class Rectangle extends Shape {
    constructor(width, height, color){
        super(color);
        this.width = width;
        this.height = height;
    }

    area(){
        const area = this.width * this.height;
        return area;
    }

    perimeter(){
        const perimeter = 2*(this.width + this.height);
        return perimeter
    }

    static whoami(){
        return "I am a rectangle";
    }
}

// const rect = new Rectangle(2, 4, "red");
// const area = rect.area();
// const perimeter = rect.perimeter();
// console.log(area);
// console.log(perimeter);
// rect.paint();
// console.log(Rectangle.whoami());

// static methods are the methods are attached to class, methods belong to class, not to an objects

// inheritance

class Circle extends Shape{
    constructor(radius, color){
        super(color);
        this.radius = radius;
    }

    area(){
        return 3.14 * this.radius * this.radius;
    }

    perimeter(){
        return 2 * 3.14 * this.radius
    }
}

class Square extends Shape {
    constructor(side, color){
        super(color);
        this.side = side;
        this.color = color;
    }

    area() {
        return this.side * this.side;
    }

    perimeter() {
        return this.side * this.side;
    }
}



const r1 = new Rectangle(10, 20, "red");
const c1 = new Circle(20, "yellow");
const s1 = new Square(300, "black");

console.log(r1.paint());
console.log(s1.paint());
console.log(c1.paint());