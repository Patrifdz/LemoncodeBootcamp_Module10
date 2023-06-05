/* EXERCISE 1 -> hasId -> Implementa una función llamada hasId que admita como parámetro un objeto y compruebe si dicho objeto tiene una propiedad llamada id (debe devolver booleano true/false). */

const person = {
    surname: "fdez",
    age: 34,
    id: 5839,
}
const hasId = ({id}) => typeof id !== "undefined";
console.log("Función hasId: ", hasId(person));

/* EXERCISE 2 -> head -> Implementa una función llamada head tal que, dado un array como entrada, devuelva el primer elemento. */

const teachers = ["Javi", "Lissette", "Jaime", "Victor", "Dani"];
const head = ([first]) => first;
console.log("Función head: ", head(teachers));
;
    
/* EXERCISE 3 -> tail -> Implementa una función llamada tail tal que, dado un array como entrada, devuelva un nuevo array con todos los elementos menos el primero. */

const tail = ([,...myArray]) => myArray;
console.log("Función tail: ", tail(teachers));

/* EXERCISE 4 -> swapFirstToLast -> Implementa una función llamada swapFirstToLast tal que, dado un array como entrada, devuelva un nuevo array donde el primer elemento ha sido colocado en la última posición. */

const swapFirstToLast = ([first,...rest]) => [...rest, first];
console.log("Función swapFirstToLast: ", swapFirstToLast(teachers));

/* EXERCISE 5 -> excludeId -> Implementa una función llamada excludeId tal que, dado un objeto como entrada, devuelva dicho objeto clonado excepto la propiedad id si la hubiera. */

const excludeId = ({id, ...rest}) => rest;
console.log("Función excludeId: ", excludeId(person))

/* EXERCISE 6 -> wordsStartingWithA -> Implementa una función llamada wordsStartingWithA tal que, dado un array de palabras como entrada, devuelva otro array filtrado con aquellas palabras que empiecen por a. */

const words = ["camera", "apple", "radio", "sugar", "animal"];

const wordsStartingWithA = ([...myArguments]) => myArguments.filter(arg => [...arg][0] === "a");
console.log("Función wordsStartingWithA: ", wordsStartingWithA(words));

/* EXERCISE 7 -> concat -> Implementa una función llamada concat tal que admita múltiples argumentos de tipo string y devuelva otro string con la concatenación de todos, separados por |. */

const concat = (...myArguments) => [...myArguments].map(arg => arg.join("|"));
console.log("Función concat: ", concat(words));

/* EXERCISE 8 -> multArray -> Implementa una función llamada multArray que admita un array de números (arr) y otro parámetro que sea un número (x) y devuelva un nuevo array donde cada elemento ha sido multiplicado por x. */

const numbersArray = [1, 2, 3];
const multArray = ([...numbers], multiply) => numbers.map(number => number * multiply);
console.log("Función multArray: ", multArray(numbersArray, 2));

/* EXERCISE 9 -> calcMult -> Implementa una función llamada calcMult que admita múltiples números como argumento y devuelva como resultado el producto de todos ellos. */ 

const calcMult = numbers => numbers.reduce((acc, currentValue) => {
    acc = acc * currentValue; 
    return acc;
}, 1);
console.log("Función calcMult: ", calcMult(numbersArray));

/*------------------------- EXTRA EXERCISES ---------------------------------*/
console.log("------------EXTRA EXERCISES------------")
/* EXERCISE 10 -> swapFirstSecond -> Implementa una función swapFirstSecond tal que dado un array, devuelva un nuevo array donde el primer elemento ha sido intercambiado por el segundo. */ 

const list = ["thriller", "action", "comedy"];
const swapFirstSecond = ([first, second, ...rest]) => [second, first, ...rest];
console.log("Funcion swapFirstSecond: ", swapFirstSecond(list));

/* EXERCISE 10 -> firstEqual -> Implementa una función firstEqual tal que admita multiples strings como argumento de entrada así como un carácter cualquiera, y devuelva un booleano indicando si todos los strings comienzan por dicho carácter o no. */
const array1 = ["book", "brain", "babel"];
const array2 = ["cinema", "bronx", "theatre", "film"];
const array3 = ["perro", "gato", "pájaro", "leon", "pez"]
const firstEqual = ([...myArguments], character) => myArguments.every(arg => [...arg][0] === character);
console.log("Función firstEqual: ", firstEqual(array1, "b"), firstEqual(array2, "b"));

/* EXERCISE 11 -> longest -> Implementa una función longest que admita múltiples arrays como entrada, y devuelva el array más largo. */

const longest = (...myArguments) => {
    myArguments.sort( (a, b) =>  a.length > b.length? -1: 1);
    return myArguments[0];
}
console.log("Función longest: ", longest(array1, array2, array3));

/* EXERCISE 12 -> searchInStringV1 -> Implementa una función llamada searchInStringV1 tal que dado un string como parámetro y también un carácter, devuelva cuantas veces aparece dicho carácter en el string. */

const searchInStringV1 = (text, character) => ([...text]).reduce((acc, letter)=> {
    letter === character?acc++:acc;
    return acc;
}, 0)
console.log("Función searchInStringV1: ", searchInStringV1("amapola", "a"))

/* EXERCISE 13 -> searchInStringV2 -> Implementa el mismo ejercicio de antes, llamando a la función searchInStringV2, encontrando otra alternativa sin usar reduce. */

const searchInStringV2 = (text, character) => ([...text]).filter(letter => letter === character).length;
console.log("Función searchInStringV2: ", searchInStringV2("amapola", "a"));

/* EXERCISE 14 -> sortCharacters -> Implementa una función llamada sortCharacters tal que dado un string, lo devuelva con sus letras ordenadas alfabéticamente. TIP: Convierte el string a un array mediante Array.from().*/

const sortCharacters = (text) => Array.from(text).sort();
console.log(sortCharacters("amapola"));

/* EXERCISE 15 -> shout -> Implementa una función llamada shout tal que, dadas múltiples palabras como entrada, devuelva todas las palabras concatenadas en un texto donde aparezcan en mayúsculas y con exclamaciones. */

const shout = (...severalWords) => Array.from(severalWords).join("!").toUpperCase()+"!";
console.log(shout("hola", "amigo", "mío"));

/* EXERCISE 16 -> Lista de la compra -> Dada la siguiente lista de la compra:*/

const shoppingCart = [
    { category: "Frutas y Verduras", product: "Lechuga", price: 0.8, units: 1 },
    { category: "Carne y Pescado", product: "Pechuga pollo", price: 3.75, units: 2 },
    { category: "Droguería", product: "Gel ducha", price: 1.15, units: 1 },
    { category: "Droguería", product: "Papel cocina", price: 0.9, units: 3 },
    { category: "Frutas y Verduras", product: "Sandía", price: 4.65, units: 1 },
    { category: "Frutas y Verduras", product: "Puerro", price: 4.65, units: 2 },
    { category: "Carne y Pescado", product: "Secreto ibérico", price: 5.75, units: 2 },
  ];

/* A. Obtén una nueva lista donde aparezca el IVA (21%) de cada producto. */
console.log("Función añadir propiedad IVA: ");
shoppingCart.map(element => console.log(newList(element)));
function newList (product){
    return( {...product,
    IVA: (0.21*product.price).toFixed(2)})
}
/* B. Ordena la lista de más a menos unidades. */

console.log("Ordenar lista de más a menos unidades: ", shoppingCart.sort( (a,b) => a.units > b.units? -1:1))

/* C. Obtén el subtotal gastado en droguería. */

console.log("Función subtotal DROGUERÍA: ", shoppingCart.filter( element => element.category === "Droguería")
.reduce( (acc, currentValue) => {
    acc += currentValue.price * currentValue.units;
    return acc;
},0));

/* D. Obtén la lista por consola en formato "Producto -> Precio Total €" y ordenada por categoría. */

const showProductsByCategory = ([...array]) => {
    array.sort( (a,b) => a.category < b.category?-1:1)
    .map(element => console.log(`${element.category}: ${element.product} -> Precio total: ${((element.price * 1.21) * element.units).toFixed(2)} €`));
}

showProductsByCategory(shoppingCart);
