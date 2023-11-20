/*
Entregar:
  -Estructura HTML
  -Variables
  -Funciones
  -Objetos (literales o funcion constuctora)
  -Arrays (y sus metodos especialmente busqueda y filtrado)
  -Metodos de filtrado
  -Iteracion (algunas de las variantes del FOR)

IDEAS:
  -Tienda de figuras de One Piece
  -Ofrecer producto random
  -Ofrecer producto mas caro o mas barato (min, max)
*/

const Figura = function (nombre, bando, precio){
  this.nombre =  nombre;
  this.bando = bando;
  this.precio = precio;
}

let listadoFiguras = [
  figura1 = new Figura("SANJI", "PIRATAS SOMBRERO DE PAJA", 215),
  figura2 = new Figura("USOPP", "PIRATAS SOMBRERO DE PAJA", 154),
  figura3 = new Figura("NAMI", "PIRATAS SOMBRERO DE PAJA", 167),
  figura4 = new Figura("TONY TONY CHOPPER", "PIRATAS SOMBRERO DE PAJA", 75),
  figura5 = new Figura("MONKEY D. LUFFY", "PIRATAS SOMBRERO DE PAJA", 220),
  figura6 = new Figura("RORONOA ZORO", "PIRATAS SOMBRERO DE PAJA", 215),
  figura7 = new Figura("NICO ROBIN", "PIRATAS SOMBRERO DE PAJA", 210),
  figura8 = new Figura("FRANKY", "PIRATAS SOMBRERO DE PAJA", 207),
  figura9 = new Figura("JINBE", "PIRATAS SOMBRERO DE PAJA", 212),
  figura10 = new Figura("SENGOKU", "MARINA", 127),
  figura11 = new Figura("AKAINU", "MARINA", 121),
  figura12 = new Figura("KIZARU", "MARINA", 121),
  figura13 = new Figura("AOKIJI", "MARINA", 121),
  figura14 = new Figura("MONKEY D. DRAGON", "EJERCITO REVOLUCIONARIO", 154),
  figura15 = new Figura("SABO", "EJERCITO REVOLUCIONARIO", 118),
];

getListadoIVA = () => {
  // CREO UNA COPIA DEL LISTADO BASE PERO SUMANDO EL IVA AL PRECIO
  let listadoIVA = [];
  listadoFiguras.forEach( x => {
    const f = new Figura(x.nombre, x.bando, x.precio * 1.21)
    listadoIVA.push(f);
  });
  return listadoIVA;
}

mostrarListadoBase = () => {
  //MUESTO POR CONSOLA EL LISTADO DE PRECIOS SIN IVA
  console.clear();
  console.log("LISTADO DE FIGURAS (SIN IVA) 📄");
  console.table(listadoFiguras);
}

ordenarPor = (list, criterio, orden) => {
  //RECIBE DOS PARAMETROS PARA ORDENAR POR NOMBRE O POR PRECIO DE MANERA ASCENDENTE O DESCENDENTE
  //LIST ES EL ARREGLO A ORDENAR
  //CRITERIO PUDE SER "nombre" O "precio"
  //ORDEN "reverse" ES OPCIONAL

  if (criterio === "nombre") {
    list.sort((obj1, obj2) => {
      if (obj1.nombre < obj2.nombre)
        return -1
      else if (obj1.nombre > obj2.nombre)
        return 1
      else
        return 0
    })
  }else if (criterio === "precio"){
    list.sort((a,b) => a.precio - b.precio);
  }else{
    return "Criterio incorrecto"
  }

  if (orden === "reverse")
    return list.reverse();

  return list;
}

aniadirFigura = () => {
  // AÑADE UNA FIGURA AL LISTADO BASE (SIN IVA)
  const figura = new Figura();

  figura.nombre = prompt("Ingrese el nombre de la figura").toUpperCase().trim();
  figura.bando = prompt("Ingrese el bando al que pertenece").toUpperCase().trim();
  figura.precio = parseFloat(prompt("Ingrese el precio (sin IVA)").trim());

  agregar = () => {
    listadoFiguras.push(figura);
      console.clear();
      console.log("Figura añadida exitosamente ✅");
      console.table(getListadoIVA());
      alert("Figura añadida exitosamente ✅\nRevisa la consola.");
  }

  if (listadoFiguras.map(x => x.nombre).includes(figura.nombre)) { // VERIFICO SI YA EXISTE UNA FIGURA CON ESE NOMBRE
    console.table(listadoFiguras.filter(x => x.nombre.includes(figura.nombre))); // SI EXISTE MUESTRO EL LISTADO DE LAS FIGURAS QUE COINCIDEN POR CONSOLA
    const respuesta = confirm("❕ Ya existe un producto similar a ese nombre ❕\nDesea agregarlo de igal manera?");
    if (respuesta) { // SI ELUSUARIO ACEPTA LO AGREGO
      agregar();
    }else{
      console.clear();
      alert("❌La figura no fue añadida.❌");
    }
  }else{
    agregar();
  }

}

buscarFigura = () => {
  const nombreBuscado = prompt("Ingrese el nombre de la figura que busca 🔍").toUpperCase();
  let respuesta = getListadoIVA().filter( x => x.nombre.includes(nombreBuscado));
  
  if (respuesta.length > 0) {
    console.clear();
    console.log("ENCONTRAMOS ESTAS FIGURAS:");
    console.table(respuesta);
  }else{
    console.clear();
    alert("No se encontro producto alguno que contenga la palabra " + nombreBuscado + " 😔");
  }

}

mostrarListadoNombres = () => {
  console.clear();
  console.log("LISTADO DE NOMBRES DE FIGURAS 📄");
  console.table(listadoFiguras.map( x => x.nombre ).sort());
}

consultarDisponible = () => {
  const nombreBuscado = prompt("Ingrese el nombre de la figura que desea consultar").toUpperCase().trim();

  if (listadoFiguras.some(x => x.nombre.includes(nombreBuscado))) {
    console.clear();
    console.table(getListadoIVA().filter( x => x.nombre.includes(nombreBuscado)));
    alert("Tenemos productos que se asemejan a " + nombreBuscado + "😄");
  }else{
    console.clear();
    alert("No tenemos figuras que se asemejen a " + nombreBuscado + "😔");
  }
}

verListadoOrdenado = () => {
  let opcion;

  do {
    opcion = prompt("   Ingrese el criterio por el cual desea ordenar el listado 📄\n"+
    "1- Ordenar por nombre ascendente\n"+
    "2- Ordenar por nombre descendente\n"+
    "3- Ordenar por precio ascendente\n"+
    "4- Ordenar por precio descendente\n\n"+
    "0- Volver al menú anterior");

    if (opcion == null) {
      break;
    }else{
      opcion = parseInt(opcion.trim());
    }

    switch (opcion) {
      case 1:
        console.clear();
        console.log("LISTADO ORDENADO POR NOMBRE ASCENDENTE 📄");
        console.table(ordenarPor(getListadoIVA(),"nombre"));
        break;
  
      case 2:
        console.clear();
        console.log("LISTADO ORDENADO POR NOMBRE DESCENDENTE 📄");
        console.table(ordenarPor(getListadoIVA(),"nombre","reverse"));
        break;
  
      case 3:
        console.clear();
        console.log("LISTADO ORDENADO POR PRECIO ASCENDENTE 📄");
        console.table(ordenarPor(getListadoIVA(),"precio"));
        break;
  
      case 4:
        console.clear();
        console.log("LISTADO ORDENADO POR NOMBRE DESCENDENTE 📄");
        console.table(ordenarPor(getListadoIVA(),"precio", "reverse"));
        break;

      case 0:
        break;
  
      default:
        alert("❌No se reconoce la opción ingresada.❌")
        continue;
    }
  } while (opcion !== 0);

}

iniciar = () => {
  let opcionMenu;
  do {
    opcionMenu = prompt(mostrarMenu());

    if (opcionMenu == null) {
      alert("Gracias por visitarnos");
      console.clear();
      break;
    }else{
      opcionMenu = parseInt(opcionMenu);
    }
  
    switch (opcionMenu) {
      case 1:
        mostrarListadoBase();
        break;

      case 2:
        console.clear();
        console.log("LISTA DE PRECIOS FINALES 📄");
        console.table(getListadoIVA());
        break;
      
      case 3:
        mostrarListadoNombres();
        break;
      
      case 4:
        verListadoOrdenado();
        break;
      
      case 5:
        aniadirFigura();
        break;
      
      case 6:
        buscarFigura();
        break;
      
      case 7:
        consultarDisponible();
        break;
  
      case 0:
        alert("Gracias por visitarnos");
        console.clear();
        break;

      default:
        alert(`No se reconoce la opción ingresada. Intente nuevamente.`);
        continue;
    }
    
  } while (opcionMenu !== 0);
}

mostrarMenu = () => {
  return `-----------------BIENVENIDO A FIGURAS ONE PIECE-----------------

    Seleccione una opción:
1- Ver listado completo de figuras (sin IVA)
2- Ver listado completo de figuras (con IVA)
3- Ver listado de nombre de figuras
4- Ver listado ordenado
5- Añadir figura
6- Buscar figura
7- Consultar disponibilidad

0- Salir`
}