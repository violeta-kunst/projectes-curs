class figura{
    constructor (x,y){
      this.x = x;
      this.y = y;
    }
    
    area(){
    return this.x * this.y;
    }
  }
  
class rectangulo extends figura{
   
    }
  
class triangulo extends figura{
    area(){
      return (this.x * this.y)/2;
    }
  }
  
class cuadrado extends rectangulo{
      constructor(x){
          super(x,x)
      }
  }
  
let rectangulo1 = new rectangulo(4,5)
let triangulo1 = new triangulo(4,5)
let cuadrado1 = new cuadrado(4)
  
console.log (rectangulo1.area(), rectangulo1.x,rectangulo1.y)
console.log (triangulo1.area(),triangulo1.x,triangulo.y)
console.log (cuadrado1.area(), cuadrado1.x)

