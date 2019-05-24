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
const a = [1,2,3,4,5,6,7,8,9,10]
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
a.splice(4,0,12)
console.log(a);