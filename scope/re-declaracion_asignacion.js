/*declarando. Cuando solo declaramos una variable
el valor por defecto será undefined*/
var firstName
firstName = 'Oscar' //asignar un valor
console.log(firstName)

var lastName = 'Madrigal' //declarando y asignando
lastName = 'Gutierrez' // reasignando
console.log(lastName);

//let
let fruit = 'Apple' // deeclarando y asignando
fruit = 'Kiwi' // reasignando
console.log(fruit);


//const
const animal = 'dog' //declara y asigna
animal = 'cat' //reasignando
console.log(animal);

const vehicles = []
vehicles.push('🚗')
console.log(vehicles);

vehicles.pop()
console.log(vehicles);

/**const no es una forma infalible de manejar la inmutabilidad. Cuando trabajamos con arreglos y objetos estamos agregando valores a la referencia */
