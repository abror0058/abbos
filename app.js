let arr = [20,30,15]

//1 way
// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// //2way
// for(let n of arr){
//     console.log(n);
// }

//3way
// arr.forEach((k)=> {
//     console.log(k);
// })

arr.push("end") // arrayni oxiriga data qo`shish
arr.unshift("start") // arrayni oxiriga data qo`shish
arr.pop() // arrayni oxiridan olib tashlaydi
arr.shift() // arrayni boshidan olib tashlaydi

// console.log(arr);


// let salary = [500, 150,200]
// let newSalary= []

// salary.forEach((s)=>{
//     newSalary.push( s + (s * 0.1))

// })

// console.log(newSalary);

// let names = ["Abror", "Ibrohim", "Ismoil"]
// let mr = []

// names.forEach((s)=>{
//     mr.push(s+"jon")
// }) 
//  console.log(mr);

 


 let sonlar = [15, -6, 8 , -3 , 10] 
 let musbat = []

 sonlar.forEach((n)=>{
    if(n > 0){
        musbat.push(n)
    }else{
        musbat.push(n * -1)
    }
 })

 console.log(musbat);