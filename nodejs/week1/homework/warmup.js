console.log("inside warmup file succeed");
class Circle{
   constructor(radius){
       this.radius = radius
   };
getDiameter(){
  return this.radius*2
};
getCircumference(){
    return this.radius*2*3.14159
};
getArea(){
    return this.radius*this.radius*3.14159
} ;
}

const circle = new Circle(5);
console.log(circle.getDiameter());
console.log(circle.getCircumference()); 
console.log(circle.getArea()); 

