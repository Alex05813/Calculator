const Calculadora = require('../../../src/components/Calculadora');
const CalculadoraService = require('../../../src/services/calculadora.service');

// Mock del servicio
jest.mock('../../../src/services/calculadora.service');

describe('Calculadora', () => {
  let calculadora;
  let mockService;

  beforeEach(() => {
    // Configurar el mock antes de cada prueba
    mockService = new CalculadoraService();
    calculadora = new Calculadora();
    calculadora.service = mockService;
  });

  describe('calcular', () => {
    it('debería llamar al método correcto del servicio según la operación', () => {
      // Configurar los mocks
      mockService.sumar.mockReturnValue(5);
      mockService.restar.mockReturnValue(2);
      mockService.multiplicar.mockReturnValue(6);
      mockService.dividir.mockReturnValue(3);

      // Probar cada operación
      expect(calculadora.calcular('sumar', 2, 3)).toBe(5);
      expect(mockService.sumar).toHaveBeenCalledWith(2, 3);

      expect(calculadora.calcular('restar', 5, 3)).toBe(2);
      expect(mockService.restar).toHaveBeenCalledWith(5, 3);

      expect(calculadora.calcular('multiplicar', 2, 3)).toBe(6);
      expect(mockService.multiplicar).toHaveBeenCalledWith(2, 3);

      expect(calculadora.calcular('dividir', 6, 2)).toBe(3);
      expect(mockService.dividir).toHaveBeenCalledWith(6, 2);
    });

    it('debería lanzar error para operación no soportada', () => {
      expect(() => calculadora.calcular('potencia', 2, 3)).toThrow("Operación no soportada");
    });

    it('debería validar las entradas antes de calcular', () => {
      expect(() => calculadora.calcular('sumar', 'a', 2)).toThrow("Ambos valores deben ser números");
    });
  });
});