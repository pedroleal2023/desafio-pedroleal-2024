"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RecintosZoo = void 0;

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var RecintosZoo = /*#__PURE__*/function () {
  function RecintosZoo() {
    _classCallCheck(this, RecintosZoo);
    this.recintos = [
      { numero: 1, bioma: 'savana', tamanho: 10, animais: { MACACO: 3 } },
      { numero: 2, bioma: 'floresta', tamanho: 5, animais: {} },
      { numero: 3, bioma: 'savana e rio', tamanho: 7, animais: { GAZELA: 1 } },
      { numero: 4, bioma: 'rio', tamanho: 8, animais: {} },
      { numero: 5, bioma: 'savana', tamanho: 9, animais: { LEAO: 1 } }
    ];
    this.animais = {
      LEAO: { tamanho: 3, bioma: 'savana' },
      LEOPARDO: { tamanho: 2, bioma: 'savana' },
      CROCODILO: { tamanho: 3, bioma: 'rio' },
      MACACO: { tamanho: 1, biomas: ['savana', 'floresta'] },
      GAZELA: { tamanho: 2, bioma: 'savana' },
      HIPOPOTAMO: { tamanho: 4, biomas: ['savana', 'rio'] }
    };
  }

  _createClass(RecintosZoo, [{
    key: "analisaRecintos",
    value: function analisaRecintos(animal, quantidade) {
      if (!this.animais[animal]) {
        return { erro: 'Animal inválido', recintosViaveis: [] };
      }
      if (quantidade <= 0) {
        return { erro: 'Quantidade inválida', recintosViaveis: [] };
      }

      var recintosViaveis = [];
      for (var _i = 0, _this$recintos = this.recintos; _i < _this$recintos.length; _i++) {
        var recinto = _this$recintos[_i];
        if (this.isRecintoViavel(recinto, animal, quantidade)) {
          var espacoLivre = recinto.tamanho - this.calculaEspacoOcupado(recinto, animal, quantidade);
          recintosViaveis.push("Recinto ".concat(recinto.numero, " (espaço livre: ").concat(espacoLivre, " total: ").concat(recinto.tamanho, ")"));
        }
      }

      if (recintosViaveis.length === 0) {
        return { erro: 'Não há recinto viável', recintosViaveis: [] };
      }

      return { erro: '', recintosViaveis: recintosViaveis };
    }
  }, {
    key: "isRecintoViavel",
    value: function isRecintoViavel(recinto, animal, quantidade) {
      var infoAnimal = this.animais[animal];

      if (infoAnimal.biomas) {
        if (!infoAnimal.biomas.includes(recinto.bioma)) {
          return false;
        }
      } else if (infoAnimal.bioma !== recinto.bioma) {
        return false;
      }

      var espacoOcupado = this.calculaEspacoOcupado(recinto, animal, quantidade);
      if (espacoOcupado > recinto.tamanho) {
        return false;
      }

      if (animal === 'HIPOPOTAMO') {
        if (recinto.bioma !== 'savana e rio') {
          return false;
        }
      }

      if (animal === 'MACACO') {
        if (Object.keys(recinto.animais).length === 0) {
          return false;
        }
      }

      if (['LEAO', 'LEOPARDO', 'CROCODILO'].includes(animal)) {
        for (var especie in recinto.animais) {
          if (especie !== animal) {
            return false;
          }
        }
      }

      return true;
    }
  }, {
    key: "calculaEspacoOcupado",
    value: function calculaEspacoOcupado(recinto, animal, quantidade) {
      var espacoOcupado = 0;

      for (var especie in recinto.animais) {
        espacoOcupado += this.animais[especie].tamanho * recinto.animais[especie];
      }

      espacoOcupado += this.animais[animal].tamanho * quantidade;

      return espacoOcupado;
    }
  }]);

  return RecintosZoo;
}();

exports.RecintosZoo = RecintosZoo;
