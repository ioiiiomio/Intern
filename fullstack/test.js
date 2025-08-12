function sayHello() {
  console.log(this.name);
}

const person = {
  name: "John",
  sayHello: sayHello,
};

person.sayHello();

const greet = person.sayHello;
greet();

//
const person2 = {
  name: "John",
  sayHello: function () {
    const greet = () => {
      console.log(this.name);
    };
    greet();
  },
};

person2.sayHello();

//
console.log(5 == "5");
console.log(5 === "5");
