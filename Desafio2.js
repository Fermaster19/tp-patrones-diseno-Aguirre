class Pizza {
    getDescripcion() {
      return "Pizza base";
    }
  
    getPrecio() {
      return 1000;
    }
  }
  
  // Decorator base
  class IngredienteDecorator {
    constructor(pizza) {
      this.pizza = pizza;
    }
  }
  
  // Queso
  class Queso extends IngredienteDecorator {
    getDescripcion() {
      return this.pizza.getDescripcion() + ", queso";
    }
  
    getPrecio() {
      return this.pizza.getPrecio() + 200;
    }
  }
  
  // Pepperoni
  class Pepperoni extends IngredienteDecorator {
    getDescripcion() {
      return this.pizza.getDescripcion() + ", pepperoni";
    }
  
    getPrecio() {
      return this.pizza.getPrecio() + 300;
    }
  }
  
  // Uso
  let pizza = new Pizza();
  pizza = new Queso(pizza);
  pizza = new Pepperoni(pizza);
  
  console.log(pizza.getDescripcion());
  console.log(pizza.getPrecio());
  