const CalculadoraService = require('../../../src/services/calculadora.service');

describe('CalculadoraService', () => {
  let calculadora;

  beforeEach(() => {
    calculadora = new CalculadoraService();
  });

  describe('sumar', () => {
    it('debería sumar dos números correctamente', () => {
      expect(calculadora.sumar(2, 3)).toBe(5);
      expect(calculadora.sumar(-1, 1)).toBe(0);
      expect(calculadora.sumar(0, 0)).toBe(0);
    });
  });

  describe('restar', () => {
    it('debería restar dos números correctamente', () => {
      expect(calculadora.restar(5, 3)).toBe(2);
      expect(calculadora.restar(10, 20)).toBe(-10);
    });
  });

  describe('multiplicar', () => {
    it('debería multiplicar dos números correctamente', () => {
      expect(calculadora.multiplicar(3, 4)).toBe(12);
      expect(calculadora.multiplicar(-2, 5)).toBe(-10);
    });
  });

  describe('dividir', () => {
    it('debería dividir dos números correctamente', () => {
      expect(calculadora.dividir(10, 2)).toBe(5);
      expect(calculadora.dividir(9, 3)).toBe(3);
    });

    it('debería lanzar un error al dividir por cero', () => {
      expect(() => calculadora.dividir(5, 0)).toThrow("División por cero no permitida");
    });
  });
});