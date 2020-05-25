// prime numbers
// function findPrime(number){
//     if(number != 2){
//         for(let i = 2; i<number; i++){
//             if(number%i){
//                 console.log(`its prime`)
//                 break
//             }else{
//                 console.log(`its not prime`)
//                 break;
//             }
//         }
//     } else {
//         console.log(`its prime`)
//     }
    
// }
// findPrime(4)



// Prime factors

// function primeFactors(number){
//     const factors = []
//     for( let i = 2; i < number ; i++){
//         if(number % i === 0){
//             factors.push(i)
//             console.log(factors)  
//         }
//     }
//     console.log(factors)
//         const primeFact = factors.filter(number => {
//             if(number != 2){
//                 for(let j=2; j < number ; j++){
//                     if(number%j){
//                         return number
//                     }
//                 }
//             }else{
//                 return number
//             }
//         })    
//     return primeFact
    
// }

// console.log(primeFactors(21))

// function fibonacci (number) {
//     const fin = [0,1]
//     sum = 0
//     if(number === 1){
//         return 0
//     }else if(number === 2){
//         return 1
//     }else{
//         for(let i=3 ;i<=number+1;i++){
//             console.log(fin)
//             sum = fin[i-2] + fin[i-3]
//             fin.push(sum)
//         }
//         return sum
//     }
// }

// console.log(fibonacci(12))


//GCD

// function divisor(a,b){
//    if(a>b){
//     for(i = a ; i>= 1 ; i--){
//         if(a%i===0){
//             if(b%i===0){
//                 return i
//             }
//         }
//     }
//    }else{
//     for(i = b ; i>= 1 ; i--){
//         if(b%i===0){
//             if(a%i===0){
//                 return i
//             }
//         }
//     }
//    }
// }

// console.log(divisor(21,14))


function removeDuplicate(arr){
    const filteredArray = []
    for(let i=0; i < arr.length ; i++){
        for(let j = i+1 ; j < arr.length ; j++){
            if(arr[i] == arr[j]){
                delete arr[i]
            }
        }
    }
    return filteredArray
}

console.log(removeDuplicate([1,3,3,3,1,5,6,8,1]))

    

