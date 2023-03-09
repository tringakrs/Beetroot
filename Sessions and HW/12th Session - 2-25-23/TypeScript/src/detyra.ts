interface Shape {
    name: string;
    color: string;
  }

  class Rectangle implements Shape {
    name: string;
    color: string;
    width: number;
    height: number;
  
    constructor(name: string, color: string, width: number, height: number) {
      this.name = name;
      this.color = color;
      this.width = width;
      this.height = height;
    }
  
    area(): number {
      return this.width * this.height;
    }
  }

  class Circle implements Shape {
    name: string;
    color: string;
    radius: number;
  
    constructor(name: string, color: string, radius: number) {
      this.name = name;
      this.color = color;
      this.radius = radius;
    }
  
    area(): number {
      return Math.PI * Math.pow(this.radius, 2);
    }
  }

  const R1 = new Rectangle('R1', 'green', 10, 3);
  console.log(R1);
  console.log(R1.area());
  const C1 = new Circle('blue', 'C1', 1.3)
  console.log(C1);
  console.log(C1.area());
  
    
  