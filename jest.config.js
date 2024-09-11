// jest.config.js

export default {
  // Ativa a coleta de cobertura dos testes
  collectCoverage: true,

  // Diretório onde os relatórios de cobertura serão armazenados
  coverageDirectory: "coverage",

  // Provê o mecanismo de cobertura para o Jest
  coverageProvider: "v8",

  // Utiliza módulos ES6
  transform: {
    "^.+\\.js$": "babel-jest"
  },

  // Diretórios que o Jest deve procurar por arquivos de teste
  roots: ["<rootDir>/src"],

  // Padrões para localizar arquivos de teste
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[tj]s?(x)"
  ],

  // Ignora arquivos de teste dentro da pasta node_modules
  testPathIgnorePatterns: ["/node_modules/"],

  // Indica o ambiente de teste a ser utilizado
  testEnvironment: "node",

  // Opcional: Suprime avisos experimentais do Node.js
  verbose: true,
};
