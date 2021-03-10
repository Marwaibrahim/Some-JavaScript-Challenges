// console.log('Hi Marwa');
// alert('Hi Again');

// var name = "Marwa";
// console.log(name);

// var num = 487;
// console.log(num);
 
// //DOM
// document.getElementById('text').innerHTML = 'Hello Marwa';

// var age = prompt("Enter ur age: ");
// document.getElementById('age').innerHTML = age;

//Numbers

//Functions

// function fun(){
//     console.log('Hi Marwa');
// }
// //we need to call fun to get outptu
// fun();

// function sayHi(name){
//     var result = 'Hi ' + name;
//     console.log(result);
// }
// name = prompt('Enter ur Name');
// // name = 'Marwa';
// sayHi(name);

// function sum(num1, num2){
//     var result = num1 + num2;
//     console.log(result);
// }

// num1 = prompt('Enter num1');
// num2 = prompt('Enter num2');
// sum(num1, num2);

//why output as a string???????????????????????????????????????????????????????


//while loop and for

//diff between var &let?????????????????????????????????????????????????????????

//Data Types
//number & string &objict = {name:'marwa', }& boolean& array [kj,oo]& undefined& null

// let name = 'marwa';
// let fullName = 'marwa\nIbrahim';

// console.log(fullName);
// console.log(fullName.length);
// console.log(fullName.indexOf('m'));
// console.log(fullName.slice(1,4));


//Arrays

// let names = ['Marwa', 'Maged', 'Mariam'];
// // names = new Array ('Marwa', 'Ibrahim', 'Maher');

// console.log(names);
// console.log(names.pop());   //shift opp of pop
// for(let i = 0; i< names.length; i++){
//     console.log(names[i]);
// }
// console.log(names.toString());
// console.log(names.join('*'));
// console.log(names.push('NONO'), names);  // unshift opp of push 
// console.log(names.reverse()); 


// let nums = [5,8,948,946,4946,1323,4946,121,1323,62,45];
// console.log(nums.sort(function(a,b){ return (a-b);}));  // sort asc
// console.log(nums.sort(function(a,b){ return (b-a);}));  // sort des


///Objects

// let student = {
//     first:'Marwa',
//     last:'Sakr',
//     age:'20',
//     title:'eng',
//     studentInfo:function(){
//         return this.first + '\n' + this.last + ' ' + this.age
//     }
// }
// console.log(student);
// console.log(student.first);
// console.log(student.last);
// console.log(student.studentInfo());


///Conditions 

var age = prompt('Enter ur age');
switch(20){
    case 20:
        status = 'Hi 20';
        break;
    case 30:
        status = 'Hi 30';
        break;
    case 20:
        status = 'Hi 40';
        break;
    default:
        status = 'Hi age';
        
}

console.log(status);





