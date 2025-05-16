class CalculadoraService {
    sumar(a, b) {
      return a + b;
    }
  
    restar(a, b) {
      return a - b;
    }
  
    multiplicar(a, b) {
      return a * b;
    }
  
    dividir(a, b) {
      if (b === 0) {
        throw new Error("División por cero no permitida");
      }
      return a / b;
    }
  
    calcularPorcentaje(numero, porcentaje) {
      return (numero * porcentaje) / 100;
    }
  }
  
  module.exports = CalculadoraService;