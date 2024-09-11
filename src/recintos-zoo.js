// recintos-zoo.js

class RecintoZoo {
    constructor(nome, capacidade) {
      this.nome = nome;
      this.capacidade = capacidade;
      this.animais = [];
    }
  
    adicionarAnimal(animal) {
      if (this.animais.length < this.capacidade) {
        this.animais.push(animal);
      } else {
        throw new Error('Capacidade máxima do recinto atingida');
      }
    }
  
    removerAnimal(animal) {
      const index = this.animais.indexOf(animal);
      if (index > -1) {
        this.animais.splice(index, 1);
      } else {
        throw new Error('Animal não encontrado no recinto');
      }
    }
  
    getAnimais() {
      return this.animais;
    }
  
    getNome() {
      return this.nome;
    }
  
    getCapacidade() {
      return this.capacidade;
    }
  }
  
  export default RecintoZoo;
  