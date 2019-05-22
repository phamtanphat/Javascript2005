// function a(){}
// console.log(typeof a);
// object : null , object , []
//function : function
// number : 1 , NaN
// let arr = [1,2,3,4,5,6,7,8]
// let arr2 = [10,20,30];


// => 8,7,6,5,4,3,2,1
// 7 ,6 ,5 ,4 ,3 ,2 ,1 , 0 -1
// for(let i = arr.length - 1 ; i >= 0; i--){
//     console.log(arr[i])
// }
// for(let i = 0 ; i < arr2.length ; i++ ){
//     for(let y = 0 ; y < arr.length ; y++){
//         console.log(arr2[i] * arr[y])
//     }
// }
// const teo = {
//     name : "Nguyen Van Teo",
//     age : 20,
//     address : "Ba hat",
//     visa : {
//         en : "My",
//         vn : "Vn"
//     }
// }
// for(let key in teo){
//     console.log(key);
//     if(typeof teo[key] === 'object'){
//         for(let key1  in teo[key]){
//             console.log(key1);
//         }
//     }
  
// }
// nodejs
// gitscm
// visual studio code
// object
//1 : Tao ra 1 bien object
// const teo = {
//     name : "Ti",
//     age : 10
// }

// const ti = {
//     name : "Ti",
//     age : 10
// }
// console.log(teo === ti);
//2 : function
function Person(name , age){
    this.name = name
    this.age = age
    this.sayhello = function(){
        return this.name + " xin chao";
    }
}
const teo = new Person("Nguyen van teo",10);
const ti = teo.sayhello;


console.log(ti.bind(teo)());