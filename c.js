// function nhan vao 1 tham so va tra ve gia tri nhan 2
// function nhan vao 1 mang va tra ve mang co cac phan tu nhan 2
// function doubleNumber(number){
//     return number * 2
// }
// function doubleElementArray(arr){
//     let output = []
//     for(let i = 0 ; i < arr.length ; i++){
//         output.push(doubleNumber(a[i]));
//     }
//     return output;
// }

// const a = [1,2,3,4,5,6,7,8,9,10]
// console.log(doubleElementArray(a));

// function dosth(fn){
//     fn();
// }
// dosth(console.log)
// const a = [1,2,3,4,5,6,7,8,9,10]
// them du lieu o cuoi cho mang : push()
// a.push(10);
//xoa du lieu o cuoi mang : pop()
// a.pop()
//them du lieu o dau mang
// a.unshift(11)
//xoa du lieu o dau mang
// a.shift(0)
//xoa vi tri bat dau toi ket thuc
// a.splice(1,3);
// them vao vi tri bat ky trong mang
// a.splice(4,0,12)
// console.log(a);

// function dosth(fn){
//     return fn()
// }

// console.log(dosth(function(){
//     return true
// }))
//Map
// const a = ["A","B","C","D","E","F","G"];
// console.log(a.map(function(chuoi , index){
//     return chuoi + ++index
// }));

// const mangperson = [
//     {name : 'Teo' , age : 80} ,
//     {name : 'Ti' , age : 15} ,
//     {name : 'Tun' , age : 30},
//     {name : 'Hoa', age : 30}
// ]
// function getAllNameArr nhan vao 1 mang tra ve 1 mang moi
// chua tat ca cac ten
// function getAllNameArr(arr){
//     return arr.map(function(person){
//         return person.name;
//     })
// }
// console.log(getAllNameArr(mangperson));

//filter
// const numbers = [1,2,3,4,5,6,7,8]
// console.log(numbers.filter(function(number){
//        if(number >= 3){
//            return true
//        }else{
//            return false
//        }
// }));
// const numbers = [1,2,3,4,5,6,7,8]
//function getArrsochan tra ve 1 mang moi 
// các giá trị trong mảng mới phải là số chẳn
// getArrsochan(numbers)

// function getArrsochan(numbers){
//     return numbers.filter(function(number){
//         return number % 2 === 0 ? true : false
//     })
// }
// console.log(getArrsochan(numbers))
// const mangperson = [
//     {name : 'Teo' , male : 'male'},
//     {name : 'Ti' , male : 'male'},
//     {name : 'Tun' , male : 'male'},
//     {name : 'Hoa', male : 'female'}
// ]

//function truyen vào 1 mảng và 1 giá trị cho giới tính
// trả về 1 mảng mới và theo yêu cầu của giới tính truyền vào
// function getMale(arr , male){
//     let mangfiltered = arr.filter(function(person){
//         if(person.male === male){
//             return true
//         }else{
//             return false;
//         }
        
//     });
//     console.log(mangfiltered);
// }

// getMale(mangperson , "female")

// reduce : ham gop
const numbers = [1,2,4,10,12,11,0,-1,29,30]
let b = numbers.reduce(function(a,b){
    console.log("A " + a);
    console.log("B " + b);
    return a + b
},5);
console.log(b);