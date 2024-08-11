console.log("This is Promise from promise.js file");

let prom01= new Promise((resolve,reject)=>{
    let a=Math.random();
    if(a<0.5){
        reject("Number is less than 0.5 error")
    }else{
        setTimeout(()=>{
            console.log("This is Resolve");
            resolve("Rohit");
        },2000)
    }    
})

let prom02= new Promise((resolve,reject)=>{
    let a=Math.random();
    if(a<0.5){
        reject("Number is less than 0.5 error")
    }else{
        setTimeout(()=>{
            console.log("This is Resolve");
            resolve("Rohit 02");
        },1000)
    }    
})

// prom01.then((a)=>{
//     console.log(a)
// }).catch((err)=>{       //Handling the number less than 0.5 error !
//     console.log(err)
// }).finally(()=>{
//     console.log('this is finnaly block')
// })

// let p3 = Promise.all([prom01,prom02])    //It will only succes when both promises are fullfilled

// p3.then((a)=>{
//     console.log(a)
// }).catch((err)=>{
//     console.log(err)
// })

let p3 = Promise.allSettled([prom01,prom02])    ////It will succes when wheter not  promises are fullfilled else not

p3.then((a)=>{
    console.log(a)
}).catch((err)=>{
    console.log(err)
})