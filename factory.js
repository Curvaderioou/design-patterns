/*
Todas as funções que retornar um objeto sem a necessidade do new sao factory
*/

// Exemplo de não factory
/*
function FakeUser(){
  this.name: "Guilher";
  this.lastName: "Cabrini";
}

const user = new FakeUser();
*/

// Exemplo da factory

/*
function Pessoa() {
  return{
    name: "Guilherme",
    lastName: "Cabrini"
  }
}
const p = Pessoa();
*/

// Podemos tambem interagir com ela, ela não é estatica

/*
function Pessoa(name) {
  return{
    name,
    lastName: "Cabrini"
  }
}
const p = Pessoa(Felipe);
*/

/*
Podemos utilizar o spreads como uma propriedade e como parametro, e passar no formato de objeto outras propriedades
*/

/*
function Pessoa(customProperties) {
  return{
    name: "Felipe",
    lastName: "Cabrini",
    ...customProperties
  }
}
const p = Pessoa({name: "Custom Name", age: 27})
*/