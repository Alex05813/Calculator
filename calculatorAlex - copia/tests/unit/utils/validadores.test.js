const { esNumero, validarEntradas } = require('../../../src/utils/validadores');

describe('validadores', () => {
  describe('esNumero', () => {
    it('debería retornar true para valores numéricos', () => {
      expect(esNumero(5)).toBe(true);
      expect(esNumero('5')).toBe(true);
      expect(esNumero(3.14)).toBe(true);
    });

    it('debería retornar false para valores no numéricos', () => {
      expect(esNumero('abc')).toBe(false);
      expect(esNumero(null)).toBe(false);
      expect(esNumero(undefined)).toBe(false);
    });
  });

  describe('validarEntradas', () => {
    it('no debería lanzar error para entradas numéricas', () => {
      expect(() => validarEntradas(5, 10)).not.toThrow();
      expect(() => validarEntradas('5', '10')).not.toThrow();
    });

    it('debería lanzar error para entradas no numéricas', () => {
      expect(() => validarEntradas('a', 5)).toThrow("Ambos valores deben ser números");
      expect(() => validarEntradas(5, 'b')).toThrow("Ambos valores deben ser números");
    });
  });
});