// burger bar
let navigationElement = document.getElementById("navBar");
let burgerElement = document.getElementById("burgerBar");
let ulElement = document.getElementById("ulBar");

burgerElement.addEventListener("click", function () {
  burgerElement.classList.toggle("activeBurger");
  ulElement.classList.toggle("activeNew");
});

// this
// 1. default binding

// function test() {
//   console.log(this); //window
// }

// test();

// 2. implicit binding
let user = {
  name: "nino",

  printName: function () {
    console.log(this.name);
  },
};

user.printName();

// 3. explicit binding - call, apply, bind

function testFnc(x, y) {
  console.log(this);
  console.log(x, y);
}

testFnc.call({}, "HelloX", "HelloY");
testFnc.apply({}, ["helloX", "helloY"]);

//
let user1 = {
  name: "anna",
};

let user2 = {
  name: "lasha",
};

let user3 = {
  name: "nini",
  printName: function () {
    console.log(this.name);
  },
};

let printNameFunc = user3.printName.bind(user2);

printNameFunc();

//arrow fnc
let arrFnc = () => console.log(this);

arrFnc(); //window

let obj = {
  name: "lasha",
  printName: () => {
    console.log(this);
  },
};

obj.printName(); ///window

//practice
// let objNew = {
//     name: 'nini',
//     printFnc: function() {
//         console.log(`hello, ${this.name}`);
//     }
// }

// objNew.printFnc(); //hello, nini

// let objNew2 = {
//     name: 'nini',
//     printFnc: () =>
//         console.log(`hello, ${this.name}`)

// }

// objNew2.printFnc(); //

//this with html elememnts
let divBox = document.querySelector(".box");

divBox.addEventListener("click", function (e) {
  //   console.log(e.target);
  //   console.log(e.currentTarget);
  //   console.log(this);
  this.style.backgroundColor = "red";
});

//ajax
// 1. xml http requist

let requist = new XMLHttpRequest();

requist.addEventListener("load", function () {
  //   console.log(this.responseText);
  let mosuliInfoText = this.responseText;
  let mosuliInfoRogorcJs = JSON.parse(mosuliInfoText);
  console.log(mosuliInfoRogorcJs);
});

requist.open("GET", "https://reqres.in/api/users?page=2");
requist.send();

// 2. fetch
