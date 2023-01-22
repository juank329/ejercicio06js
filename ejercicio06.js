


//- Una variable que contenga la lista de la compra (mínimo 5 elementos)
let listaDeLaCompra = ["Leche", "Pan", "Manzanas", "Huevos", "Queso"];
console.log(listaDeLaCompra);



//- Modifica la lista de la compra y añádele "Aceite de Girasol"
listaDeLaCompra.push("Aceite de Girasol");
console.log(listaDeLaCompra);



// Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
listaDeLaCompra.splice(listaDeLaCompra.indexOf("Aceite de Girasol"), 1);
console.log(listaDeLaCompra);



// Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
let peliculasFavoritas = [
    {titulo: "Avenger end game", director: "Anthony Russo, Joe Russo", fecha: 2019},
    {titulo: "The Godfather", director: "Francis Ford Coppola", fecha: 1972},
    {titulo: "The Godfather: Part II", director: "Francis Ford Coppola", fecha: 1974}
];
console.log(peliculasFavoritas);



// Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
let peliculasPosteriores2010 = peliculasFavoritas.filter(pelicula => pelicula.fecha >= 2010);
console.log(peliculasPosteriores2010);


// Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
let directores = peliculasFavoritas.map(pelicula => pelicula.director);
console.log(directores);



// Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
let titulos = peliculasFavoritas.map(pelicula => pelicula.titulo);
console.log(titulos);



// Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
let concatenadoConcat = directores.concat(titulos);
console.log(concatenadoConcat);



// Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
let concatenadoProp = [...directores, ...titulos];
console.log(concatenadoProp);



