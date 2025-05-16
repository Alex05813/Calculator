const Calculadora = require('../../src/components/Calculadora');

describe('Calculadora - Integration', () => {
  let calculadora;

  beforeEach(() => {
    calculadora = new Calculadora();
  });

  it('debería realizar operaciones matemáticas correctamente', () => {
    expect(calculadora.calcular('sumar', 2, 3)).toBe(5);
    expect(calculadora.calcular('restar', 5, 3)).toBe(2);
    expect(calculadora.calcular('multiplicar', 2, 3)).toBe(6);
    expect(calculadora.calcular('dividir', 6, 2)).toBe(3);
  });

  it('debería manejar errores correctamente', () => {
    expect(() => calculadora.calcular('dividir', 5, 0)).toThrow("División por cero no permitida");
    expect(() => calculadora.calcular('sumar', 'a', 2)).toThrow("Ambos valores deben ser números");
  });
});