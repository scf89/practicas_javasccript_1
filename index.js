//EJERCICIO 1
//1.1 Crea una variable llamada myFavoriteHero, asigna el valor Hulk a ella.
const myFavoriteHero = 'Hulk';
//1.2 Crea una variable llamada x, asigna el valor 50 a ella.
const x = 50;
//1.3 Crea una variable llamada 'h' con el valor 5 y otra 'y' con el valor 10. 
const h =5;
const y = 10;
//1.4 Crea una otra variable 'z' y asignale el valor de 'h' + 'y'.
const z = h+y;

//EJERCICIO 2
//1.1 Dado el siguiente objeto, cambia el valor de la propiedad age a 25.
const character = {name: 'Jack Sparrow', age: 10};
character.age= 25;

/*1.2 Declara 3 variables con los nombres y valores siguientes 
	firstName = 'Jon'; 
	lastName = 'Snow'; 
	age = 24; 
Muestralos por consola de esta forma: 	'Soy Jon Snow, tengo 24 años y me gustan los lobos.'*/
const firstName = 'Jon'; 
	const lastName = 'Snow'; 
	const age = 24; 
    console.log(`Soy ${firstName} ${lastName}, tengo ${age} años y me gustan los lobos.`)

//1.3 Dado el siguiente código, imprime con un console.log la suma del precio de ambos juguetes.
const toy1 = {name: 'Buss myYear', price: 19};
const toy2 = {name: 'Rallo mcKing', price: 29};
console.log(toy1.price+toy2.price);

//1.4 Dado el siguiente código, actualiza el valor de la variable globalBasePrice a 25000 y actualiza la propiedad finalPrice de todos los coches con el valor de su propiedad basePrice más el valor de la variable globalBasePrice.
let globalBasePrice = 10000;
const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};
globalBasePrice = 25000;
car1.finalPrice=car1.basePrice+globalBasePrice;
car2.finalPrice=car2.basePrice+globalBasePrice;

//EJERCICIO 3
//1.1 Multiplica 10 por 5 y muestra el resultado mediante console.
console.log(10*5);

//1.2 Divide 10 por 2 y muestra el resultado en un console.
console.log(10/2);

//1.3 Muestra mediante un console el resto de dividir 15 por 9.
console.log(15%9);

//1.4 Usa el correcto operador de asignación que resultará en o = 15, teniendo dos variables p = 10 y j = 5.
const p=10;
const j=5;
const o=p+j;

//1.5 Usa el correcto operador de asignación que resultará en i = 50, teniendo dos variables c = 10 y m = 5.
const c=10;
const m=5;
const i=c*m;

//EJERCICIO 4
//1.1 Consigue el valor "HULK" del array de avengers y muestralo por consola.
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log(avengers[0]);

//1.2 Cambia el primer elemento de avengers a "IRONMAN"
avengers[0]='IRONMAN';

//1.3 console numero de elementos en el array usando la propiedad correcta de Array.
console.log(avengers.length);

//1.4 Añade 2 elementos al array: "Morty" y "Summer". 
//Muestra en consola el último personaje del array
let rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
rickAndMortyCharacters.push(['Morty','Summer']);

//1.5 Elimina el último elemento del array y muestra el primero y el último por consola.
rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMortyCharacters.pop();
console.log(rickAndMortyCharacters[0]);
console.log(rickAndMortyCharacters[rickAndMortyCharacters.length-1]);

//1.6 Elimina el segundo elemento del array y muestra el array por consola.
rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMortyCharacters.splice(1, 1);
console.log(rickAndMortyCharacters);

//EJERCICIO 5
const number1 = 10;
const number2 = 20;
const number3 = 2;

// ejemplo
if(number1 === 10){
    console.log('number1 es estrictamente igual a 10')
}

if (number2/number1 == 2) {
  console.log("number2 dividido entre number1 es igual a 2");
}

if (number1 !== number2) {
  console.log("number1 es estrictamente distinto a number2");
}

if (number3 != number1) {
  console.log("number3 es distinto number1");
}

if (number3*5 == number1) {
  console.log("number3 por 5 es igual a number1");
}

if (number3*5 == number1 && number1*2 == number2) {
  console.log("number3 por 5 es igual a number1 Y number1 por 2 es igual a number2");
}

if (number2/2 == number1 || number1/5 == number3) {
  console.log("number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3");
}

//EJERCICIO 6
//1.1 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola.
for (let i = 0; i < 10; i++) {
    console.log(i);
  }

//1.2 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola solo cuando el resto del numero dividido entre 2 sea 0.
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }

//1.3 Crea un bucle para conseguir dormir contando ovejas. Este bucle tiene que dar 10 vueltas, es decir, 10 console.log. Muestra por consola un mensaje diciendo 'Intentando dormir 🐑' en cada vuelta del bucle y cambia el mensaje en la décima vuelta a 'Dormido!'.
for (let i = 1; i <= 10; i++) {
    if (i === 10) {
      console.log('Dormido!');
    } else {
      console.log('Intentando dormir 🐑');
    }
  }

  //EJERCICIO 7
  function sum(numberOne , numberTwo) {
    if(numberOne>numberTwo){
        return numberOne;
    }else{
        return numberTwo;
    }
  }

//EJERCICIO 8
const avengers2 = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(param) {
    let masLargo = param[0]; // Suponemos que el primer string es el más largo inicialmente

    for (let i = 1; i < param.length; i++) {
        if (param[i].length > masLargo.length) {
            masLargo = param[i]; // Si encontramos un string más largo, lo actualizamos
        }
    }

    return masLargo;
}

//EJERCICIO 9
const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(param) {
    let suma = 0;

    for (let i = 0; i < param.length; i++) {
        suma += param[i];
    }

    return suma;
}

//EJERCICIO 10
const numbers2 = [12, 21, 38, 5, 45, 37, 6];
function average(param) {
    let suma = 0;

    for (let i = 0; i < param.length; i++) {
        suma += param[i];
    }

    let media = suma / param.length;

    return media;
}

//EJERCICIO 11
const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
function averageWord(param) {
    let suma = 0;

    for (let i = 0; i < param.length; i++) {
        if (typeof param[i] === 'number') {
            suma += param[i];
        } else if (typeof arr[i] === 'string') {
            suma += param[i].length;
        }
    }

    return suma;
}

//EJERCICIO 12
const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];
  function removeDuplicates(param) {
    let conjunto = new Set();
    let resultado = [];

    for (let i = 0; i < param.length; i++) {
        conjunto.add(param[i]);
    }

    resultado = Array.from(conjunto);

    return resultado;
  }

//EJERCICIO 13
const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];
  function finderName(array,valor) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === valor) {
            return { existe: true, posicion: i };
        }
    }
    return { existe: false, posicion: -1 };
  }

  //EJERCICIO 14
  const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];
  function repeatCounter(palabras) {
    let contador = {};

    palabras.forEach(palabra => {
        if (contador[palabra]) {
            contador[palabra]++;
        } else {
            contador[palabra] = 1;
        }
    });

    return contador;
  }

//EJERCICIO 15
const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta'];

for (let i = 0; i < products.length; i++) {
    if (products[i].includes('Camiseta')) {
        console.log(products[i]);
    }
}

//EJERCICIO 16
const placesToTravel = ['Japon', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar'];

for (const destino of placesToTravel) {
    console.log(destino);
}

//EJERCICIO 17
const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
};

for (const key in alien) {
    console.log(`${key}: ${alien[key]}`);
}

//EJERCICIO 18
const placesToTravel2 = [
    { id: 5, name: 'Japan' },
    { id: 11, name: 'Venecia' },
    { id: 23, name: 'Murcia' },
    { id: 40, name: 'Santander' },
    { id: 44, name: 'Filipinas' },
    { id: 59, name: 'Madagascar' }
];

for (let i = 0; i < placesToTravel2.length; i++) {
    if (placesToTravel2[i].id === 11 || placesToTravel2[i].id === 40) {
        placesToTravel2.splice(i, 1);
        i--;
    }
}

console.log(placesToTravel2);

//EJERCICIO 19
const toys = [
    { id: 5, name: 'Buzz MyYear' },
    { id: 11, name: 'Action Woman' },
    { id: 23, name: 'Barbie Man' },
    { id: 40, name: 'El gato con Guantes' },
    { id: 40, name: 'El gato felix' }
];

for (let i = 0; i < toys.length; i++) {
    if (toys[i].name.includes('gato')) {
        toys.splice(i, 1);
        i--;
    }
}

console.log(toys);

//EJERCICIO 20
const popularToys = [];
const toys2 = [
    { id: 5, name: 'Buzz MyYear', sellCount: 10 },
    { id: 11, name: 'Action Woman', sellCount: 24 },
    { id: 23, name: 'Barbie Man', sellCount: 15 },
    { id: 40, name: 'El gato con Guantes', sellCount: 8 },
    { id: 40, name: 'El gato felix', sellCount: 35 }
];

for (const toy of toys2) {
    if (toy.sellCount > 15) {
        popularToys.push(toy);
    }
}

console.log(popularToys);

//EJERCICIO 21
const users = [
    { name: "Tony", years: 43 },
    { name: "Peter", years: 18 },
    { name: "Natasha", years: 14 },
    { name: "Bruce", years: 32 },
    { name: "Khamala", years: 16 },
];

console.log("Usuarios menores de edad:");
for (const user of users) {
    if (user.years < 18) {
        console.log(user.name);
    }
}

console.log("Usuarios mayores de edad:");
for (const user of users) {
    if (user.years >= 18) {
        console.log(user.name);
    }
}

//EJERCICIO 22
const fruits = ["Strawberry", "Banana", "Orange", "Apple"];
const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

for (let i = 0; i < foodSchedule.length; i++) {
    if (!foodSchedule[i].isVegan) {
        for (const fruit of fruits) {
            if (!foodSchedule.some(food => food.name === fruit)) {
                foodSchedule[i] = { name: fruit, isVegan: true };
                break;
            }
        }
    }
}

console.log(foodSchedule);

//EJERCICIO 23
const movies = [
    { name: "Titan A.E.", durationInMinutes: 130 },
    { name: "Nightmare before Christmas", durationInMinutes: 225 },
    { name: "Inception", durationInMinutes: 165 },
    { name: "The Lord of the Rings", durationInMinutes: 967 },
    { name: "Star Wars: A New Hope", durationInMinutes: 214 },
    { name: "Terminator", durationInMinutes: 140 },
  ];
  
  let peliculasPequenas = [];
  let peliculasMedianas = [];
  let peliculasGrandes = [];
  
  for (const movie of movies) {
      if (movie.durationInMinutes < 100) {
          peliculasPequenas.push(movie);
      } else if (movie.durationInMinutes >= 100 && movie.durationInMinutes < 200) {
          peliculasMedianas.push(movie);
      } else {
          peliculasGrandes.push(movie);
      }
  }
  
  console.log("Peliculas Pequeñas (menos de 100 minutos):");
  console.log(peliculasPequenas);
  
  console.log("Peliculas Medianas (más de 100 minutos y menos de 200 minutos):");
  console.log(peliculasMedianas);
  
  console.log("Peliculas Grandes (más de 200 minutos):");
  console.log(peliculasGrandes);
  
  //EJERCICIO 24
  const products2 = [
    { name: "Funko Dr. Strange", sellCount: 10 },
    { name: "Mochila de protones: Ghostbusters", sellCount: 302 },
    { name: "Sable laser FX", sellCount: 23 },
    { name: "Varita de Voldemort", sellCount: 6 },
  ];
  
  let totalVentas = 0;
  
  for (const product of products2) {
      totalVentas += product.sellCount;
  }
  
  console.log("El total de ventas de todos los productos es:", totalVentas);
  
  //EJERCICIO 25
  const products3 = [
    { name: "Funko Dr. Strange", sellCount: 10 },
    { name: "Mochila de protones: Ghostbusters", sellCount: 302 },
    { name: "Sable laser FX", sellCount: 23 },
    { name: "Varita de Voldemort", sellCount: 6 },
  ];
  
  let totalVentas2 = 0;
  
  for (const product of products3) {
      totalVentas2 += product.sellCount;
  }
  
  const mediaVentas = totalVentas2 / products3.length;
  
  console.log("La media de ventas de todos los productos es:", mediaVentas);

  //EJERCICIO 26
  const goodProducts = [];
const badProducts = [];
const products4 = [
    { name: "Funko Dr. Strange", sellCount: 10 },
    { name: "Mochila de protones: Ghostbusters", sellCount: 302 },
    { name: "Sable laser FX", sellCount: 23 },
    { name: "Varita de Voldemort", sellCount: 6 },
];

for (const product of products4) {
    if (product.sellCount > 20) {
        goodProducts.push(product);
    } else {
        badProducts.push(product);
    }
}

console.log("Productos con más de 20 ventas:");
console.log(goodProducts);

console.log("\nProductos con 20 ventas o menos:");
console.log(badProducts);
