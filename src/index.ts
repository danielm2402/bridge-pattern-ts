
// Define una interfaz 
interface Impuesto {
    logImpuesto(): number;
}

abstract class Persona {
    impuesto: Impuesto;
    constructor(impuesto: Impuesto) {
        this.impuesto = impuesto;
    }

    calcularImpuestoPersona() {
       
    }
}

class Impuesto2019 implements Impuesto {
    logImpuesto(){
        return 16
    }
}

class Impuesto2020 implements Impuesto {
    logImpuesto(){
        return 19
    }
}





class Natural extends Persona {
    constructor(impuesto: Impuesto) {
        super(impuesto);
    }

    calcularImpuestoPersona() {
        console.log(`Soy una persona natural y estoy pagando de impuestos del ${this.impuesto.logImpuesto()}%`);

    }
}





class Juridica extends Persona {
    constructor(impuesto: Impuesto) {
        super(impuesto);
    }
    calcularImpuestoPersona() {
        console.log(`Soy una persona Juridica y estoy pagando de impuestos del ${this.impuesto.logImpuesto()}%`);
    }
}













const persona1 = new Natural(new Impuesto2019);
const persona2 = new Juridica(new Impuesto2020);

persona1.calcularImpuestoPersona()
persona2.calcularImpuestoPersona()