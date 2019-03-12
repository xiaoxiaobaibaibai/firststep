/*
console.log("Hi,js")
//var o = new Object();
//o.hasOwnProperty("name");var
var a = 2/3;
console.log(a); 
let obj = {
    key1: 1,
    key2: 2
  };
  
  console.log(Object.keys(obj));*/
  /*
  let bai = {
    yong:2,
    qian:'some',

  };
  if ('toString' in bai){
    console.log(bai.hasOwnProperty('toString'))
  }
  let person = { name: '老张' };

for (let key in person) {
  if (person.hasOwnProperty(key)) {
    console.log(key);
  }
}


function fib(num){

  if (num === 0) return 0;
  if (num === 1) return 1;
  return fib(num - 2) + fib(num - 1);
 }

 console.log(fib(6));

 let args = Array.prototype.slice.call(arguments);
 //huozhe
 var args = [];
 for (let i = 0; i < arguments.length; i++){

  args.push(arguments[i]);
 }
 
let arrs = [];
arrs[-1] = 'a';
arrs[Math.pow(2,32)] = 'b';
arrs[1] = 'bai';

console.log(arrs.length,arrs[-1]);
console.log('a' in arrs)

arrs.forEach(function (arr){
  console.log(arr)
});

var colors = ['red', 'green', 'blue'];
colors.forEach(function (color) {
  console.log(color);
});

function baiYongQian(){


  Array.prototype.forEach.call(arguments,function(elem,i){

elem = 2;i = 3;
    console.log(i + '.' +elem);

  });

}
function logArgs() {
  Array.prototype.forEach.call(arguments, function (elem, i) {
    console.log(i + '. ' + elem);
  });
}
Array.prototype.forEach.call('abc', function (chr) {
  console.log(chr);
});
//这种方法比直接使用数组原生的forEach要慢，所以最好还是先将“类似数组的对象”转为真正的数组，然后再直接调用数组的forEach方法。
let arr = Array.prototype.slice.call('abc');
arr.forEach(function (chr){

  console.log(chr);
});
var obj = { p: 1 };
obj.valueOf().toString() 

//特例
let obj = new Date();
obj.valueOf = function(){
  return 1
};
obj.toString = function(){
  return 2
};
//Date 对象会先调用toString().*/




//3.9

//let myHeading = document.querySelector('h1');
//myHeading.textContent = 'Hello Madonna!';

/*
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'imag/Madonna.jpeg') {
      myImage.setAttribute('src', 'imag/Madonna2.jpeg');
    } else {
      myImage.setAttribute('src', 'imag/Madonna.jpeg');
    }
}


*/
function setHeading(name) {
  let myHeading = document.querySelector('h1');
  myHeading.textContent = '此情此景，不念俩句诗吗？' + name + '!';
  

}

function setUserName(){
  let myName = prompt('请问您高姓大名？');
  localStorage.setItem('name', myName);
  setHeading(myname);

}

let storedName = localStorage.getItem('name');
if(!storedName){

  setUserName();
}else{

  setHeading(storedName);
}

let myButton = document.querySelector('button');
myButton.onclick = setUserName;
/*

function setHeading(name) {
  let myHeading = document.querySelector('h1');
  myHeading.textContent = 'Mozilla 酷毙了，' + name + '！';
}

function setUserName() {
  let myName = prompt('请输入你的名字');
  localStorage.setItem('name', myName);
  setHeading(myName);
} 

let storedName = localStorage.getItem('name');
if(!storedName) {
   setUserName();
} else {
   setHeading(storedName);
}

let myButton = document.querySelector('button'); 
myButton.onclick = setUserName;

*/