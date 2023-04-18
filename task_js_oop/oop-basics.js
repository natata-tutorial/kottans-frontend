// ООП Классы. Часть 1. JavaScript v.2.0 https://www.youtube.com/watch?v=jgCiWIdUZ-s&list=PLM7wFzahDYnEltE-aVGhRHYPwIJn0Xquu&index=40
// JavaScript v. 2.0 ООП часть 2. Прототипы. https://www.youtube.com/watch?v=e-3GS5-rak8&list=PLM7wFzahDYnEltE-aVGhRHYPwIJn0Xquu&index=47
// Setter JavaScript https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set

// ----- Alert.js -----

/*
* Описание класса, что делает, использует...
*/
// синтаксический сахар над прототипами
class Alert { // выносить в отдельные файлы и называть с БОЛЬшой буквы, можно с наследниками
   constructor(a, b, c) { // конструктор вызывается при создании объекта (= new Alert)
      this.message = a; //свойства класса properties
      this.cssClass = b;
      this.out = c;
   }
   showAlert() { // метод класса
      document.querySelector(this.cssClass).innerHTML = `<p class ="${this.cssClass}">${this.message}</p>`
   }
   myAlert() {
      alert(this.message);
   }
}

class AlertIcon extends Alert {
   constructor(a, b, c, icon) {
      super(a, b, c);
      this.icon = icon; // new proper
   }
   showIconAlert() {
      document.querySelector(this.cssClass).innerHTML = `<p class ="${this.cssClass}"><i class="${this.icon}">${this.icon}</i>${this.message}</p>`
   }
   myAlert() {
      alert('Hi!!!' + this.message);
   }

}
// ---------

let m = new Alert('My message', 'red', 'test');
console.log(m);
m.showAlert();

let m2 = new AlertIcon('My message', 'red', 'test', 'account_balance');
m2.showIconAlert();
m2.myAlert(this.message);

// __proto__

let user = {
   username: 'Ivan',
   email: 'example@ua',
   _password: 'qwerty', // какбы приватное поле
   set password(pass) {
      // The set syntax binds an object property to a function to be called when there is an attempt to set that property. It can also be used in classes.
      this._password = pass.trim();

   },
   get password() {
      //The get syntax binds an object property to a function that will be called when that property is looked up. It can also be used in classes.
      return this._password;
   }

}

let user2 = {}
user2.__proto__ = user; // user2 наследуется от user
Object.setPrototype(user2, user); // то же что и __proto__ скорость не оптимизирована
user2.username = "Pavel"; // перезатерли имя user Ivan, теперь имя user2 Pavel
user2.photo = 'ivan.jpeg';

user2.password = '  123  432';

console.log(user2);
console.log(user2.__proto__.username); // имя берется из родителя Ivan

console.log(user2.password);  // '123  432'
console.log(user2.email); 