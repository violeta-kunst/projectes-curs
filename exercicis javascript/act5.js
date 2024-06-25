console.log(operacion (4, 8, "s"))


function operacion(a, b, o){
    switch (o) {
        case "s"  :
            return a + b;
            break;
        
        case "m" :
            return a * b;
    
        default:
            return "error"
            break; 
    }
}