// Задание 5. Определить родительскую функцию с методами, которые включают/выключают прибор из розетки.
// Создать делегирующую связь [[Prototype]] для двух конкретных приборов.
// У каждого из приборов должны быть собственные свойства и, желательно, 
// методы, отличные от родительских методов.
// Создать экземпляры каждого прибора.
// Вывести в консоль и посмотреть результаты работы, гордиться собой. :)
// Общие требования:

// Имена функций, свойств и методов должны быть информативными.
// Соблюдать best practices:
// использование camelCase нотации для переменных и методов, PascalCase 
// для названия функций-конструкторов и классов;
// информативные имена (а не a, b);
// четкая связь между классом и его экземплярами (класс описывает множество, 
// а экземпляр конкретную реализацию);
// использование синтаксиса ES6 (кроме функции-конструкторов) и т. д.

// Переписать консольное приложение из предыдущего юнита на классы.

class Device {
    constructor (name, switchedon) {
    this.name = name;
    this.type = 'electric';
    this.switcher  = function () {
      if (switchedon === true) {
        console.log(`${this.name} is switched on`)
      } else {
        console.log(`${this.name} is switched off`)
      }
    }
  }
  }
  
  class IronDevice extends Device {
      constructor (name, price, switchedon) {
      super(name, switcher);
      this.price = price
    }
  }
    
  class OvenDevice extends Device {
      constructor (name, color, switchedon) {
      super(name, switcher);
      this.color = color
    }
  }
    
  const phillipsIron = new IronDevice(name = 'Phillips', price = '3000', switcher = true);
  const mieleOven = new OvenDevice(name = 'Miele', color = 'steel', switcher = false);
  
  console.log(phillipsIron.switcher());
  console.log(phillipsIron);
  console.log(mieleOven.switcher());
  console.log(mieleOven)