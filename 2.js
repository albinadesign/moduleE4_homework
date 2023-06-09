// Задание 2 Написать функцию, которая принимает в качестве аргументов строку и объект, 
// а затем проверяет есть ли у переданного объекта свойство с данным именем. 
// Функция должна возвращать true или false.

let str = "Hello, World!"
let obj = {    
  name: "Anna", 
  age: 15  
};

function checkProperty (smth) {
  for (let key in smth) {
    if (smth.hasOwnProperty(key)) {
      alert( "name" === key )
    }
  }
  
}


checkProperty(str)
checkProperty(obj)

