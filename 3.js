// Задание 3 Написать функцию, которая создает пустой объект, но без прототипа.

function obj(){
    return Object.create(null);
   }
   console.log (obj());