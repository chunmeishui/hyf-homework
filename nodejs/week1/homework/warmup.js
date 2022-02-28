console.log("inside warmup file succeed");
const PI = 3.141596;
class Circle{
   constructor(radius){
       this.radius = radius
   };
getDiameter(){

  return this.radius * 2
};
getCircumference(){

    return this.radius * 2 * PI
};
getArea(){

    return this.radius * this.radius * PI
} ;
}

const circle = new Circle(5);
console.log(circle.getDiameter());
console.log(circle.getCircumference()); 
console.log(circle.getArea()); 

