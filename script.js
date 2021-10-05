//CREAR ARRAY DE PRODUCTOS

//Creación del objeto producto (válido para todo tipo de tienda)
    class Item {
        constructor(nombre, precio) {
            this.name  = nombre.toLowerCase();
            this.price  = Number(precio);
        }
    }

//Prompt para ingresar artículos al array
    let nuevoProducto = prompt("Ingrese producto a agregar ");
    let nuevoPrecio = Number(prompt("Ingrese precio del producto "));

//Declaración del array vacío (con corchetes)
    let elementos = [];

//UTILIZAR MÉTODOS
//Método push para agregar ítems al array vacío
    elementos.push(new Item("remera", 550));
    elementos.push(new Item("taza", 180));
    elementos.push(new Item("llavero", 120));

//Método push para agregar ítems y precio por prompt    
    elementos.push(new Item (nuevoProducto, nuevoPrecio));

//Mostrar array por consola
    console.log(elementos);
    
//Método length para chequear la cantidad total de elementos 
    console.log(elementos.length);    





























