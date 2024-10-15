const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

const pizzasIdImpar = () =>{
  pizzas.forEach((pizzas) => {
    if(pizzas.id % 2 === 1){
      console.log(`las pizzas '${pizzas.id}' tienen id impar, ${pizzas.id}`);
    }
  })
}

// pizzasIdImpar()


const pizzaBarata = () => {
  pizzas.forEach((pizzas) => {
    if (pizzas.precio < 600){
      console.log(`La pizza que vale menos de 600 es '${pizzas.nombre}'`);
    }
  })
}

// pizzaBarata()

const pizzasName = () => {
  console.log("Opciones de pizzas");
  pizzas.forEach((pizzas) => {
    console.log(`Opcion ${pizzas.id} es '${pizzas.nombre}' y vale $${pizzas.precio}`); 
  })
}

// pizzasName()

const ingredientesPizzas = () => {
  console.log("Las pizzas y sus respectivos ingredientes");
  pizzas.forEach((pizzas) => {
    console.log(`La '${pizzas.nombre}' contiene ${pizzas.ingredientes}`);
  })
}

ingredientesPizzas()