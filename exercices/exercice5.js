let nombres=[0,NaN,Infinity,-Infinity,42,3.14,Number.MAX_SAFE_INTEGER+1,-0]

for(let i=0;i<nombres.length;i++){

let n=nombres[i]

if(Number.isNaN(n)){
console.log(String(n)+" -> INVALIDE")
}

else if(n===Infinity || n===-Infinity){
console.log(String(n)+" -> INFINI")
}

else if(1/n===-Infinity){
console.log("0 -> ZERO NEGATIF")
}

else if(Number.isInteger(n) && Math.abs(n)<=Number.MAX_SAFE_INTEGER){
console.log(String(n)+" -> ENTIER SUR")
}

else if(Number.isInteger(n) && Math.abs(n)>Number.MAX_SAFE_INTEGER){
console.log(String(n)+" -> ENTIER HORS LIMITES")
}

else{
console.log(String(n)+" -> DECIMAL")
}

}