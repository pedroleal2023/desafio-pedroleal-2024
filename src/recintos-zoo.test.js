// recintos-zoo.test.js

import RecintoZoo from './recintos-zoo';

describe('RecintoZoo', () => {
  let recinto;

  beforeEach(() => {
    recinto = new RecintoZoo('Recinto A', 3);
  });

  test('deve criar um recinto com nome e capacidade', () => {
    expect(recinto.getNome()).toBe('Recinto A');
    expect(recinto.getCapacidade()).toBe(3);
  });

  test('deve adicionar um animal ao recinto', () => {
    recinto.adicionarAnimal('Leão');
    expect(recinto.getAnimais()).toContain('Leão');
  });

  test('não deve adicionar um animal se a capacidade estiver cheia', () => {
    recinto.adicionarAnimal('Leão');
    recinto.adicionarAnimal('Elefante');
    recinto.adicionarAnimal('Girafa');
    expect(() => recinto.adicionarAnimal('Zebra')).toThrow('Capacidade máxima do recinto atingida');
  });

  test('deve remover um animal do recinto', () => {
    recinto.adicionarAnimal('Leão');
    recinto.removerAnimal('Leão');
    expect(recinto.getAnimais()).not.toContain('Leão');
  });

  test('não deve remover um animal que não está no recinto', () => {
    expect(() => recinto.removerAnimal('Elefante')).toThrow('Animal não encontrado no recinto');
  });

  test('deve listar todos os animais no recinto', () => {
    recinto.adicionarAnimal('Leão');
    recinto.adicionarAnimal('Elefante');
    expect(recinto.getAnimais()).toEqual(['Leão', 'Elefante']);
  });
});
