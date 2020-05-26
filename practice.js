// **********************prime numbers***********************



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



// ********************Prime factors************************

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


// *********************fibonacci*************************

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


//************************GCD******************************

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



// ********************remove duplicate*************************

// function removeDuplicate(arr){
//     const filteredArray = []
//     for(let i = 0 ; i < arr.length ; i++){
//         if(!filteredArray.includes(arr[i])){
//             filteredArray.push(arr[i])
//         }
//     }
//     return filteredArray
// }

// console.log(removeDuplicate([1,3,3,3,1,5,6,8,1]))

// **************merge sorted array************************

// function sortedArray(arr1,arr2){
//     let newarray = [...arr1,...arr2]
//     newarray.sort((a,b) => a > b)
//     return newarray
// }

// console.log(sortedArray([2,5,6,9], [1,2,3,29]))

// *****************substring************************

// function substringFinder(str, str1){


// }

// substringFinder('abbcdabbbbbck', 'ab')



// *************************sum of two *********************************



// function sumFinder(arr,number){
//     arr1 = arr.some(element => arr.includes((number - element)));
//     return arr1
// }

// console.log(sumFinder([6,4,3,2,1,7], 9))


//**************** missing number **************

// function missingNumber(arr1){
//    let newarr =  arr1.filter((ele,index) => (ele-1)!=index)
//     return (newarr[0] - 1) 
// }

// console.log(missingNumber([1,2,3,4,5,6,7,8,10]))



