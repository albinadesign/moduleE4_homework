// Задание 4. Определить родительскую функцию с методами, которые включают/выключают прибор из розетки.
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

function DeviceGroup (name) {
    this.name = name;
    this.type = 'electric';
    this.switched = function (switchedon) {
      if (switchedon === true) {
        console.log(`${this.name} is switched on`)
      } else {
        console.log(`${this.name} is switched off`)
      }
    }
   };
  
function IronDevice(name, price) {
      this.name = name;
      this.price = price;
    };
    
function OvenDevice(name, color) {
      this.name = name;
      this.color = color;
  };
    
IronDevice.prototype = new DeviceGroup();
OvenDevice.prototype = new DeviceGroup();
  
    
const phillipsIron = new IronDevice(name = 'Phillips', price = '3000');
const mieleOven = new OvenDevice(name = 'Miele', color = 'steel');
  
  console.log(phillipsIron.switched(true));
  console.log(phillipsIron);
  console.log(mieleOven.switched(false));
  console.log(mieleOven)