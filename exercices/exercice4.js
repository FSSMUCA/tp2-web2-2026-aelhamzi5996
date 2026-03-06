let compteur = 0  /*au début aucune paire différente trouvée.*/

let a1 = 0
let b1 = ""
console.log(JSON.stringify(a1) + " == " + JSON.stringify(b1) + " -> " + (a1==b1))
console.log(JSON.stringify(a1) + " === " + JSON.stringify(b1) + " -> " + (a1===b1))
if(a1==b1 && a1!==b1){compteur++}

let a2 = 0
let b2 = "0"
console.log(JSON.stringify(a2) + " == " + JSON.stringify(b2) + " -> " + (a2==b2))
console.log(JSON.stringify(a2) + " === " + JSON.stringify(b2) + " -> " + (a2===b2))
if(a2==b2 && a2!==b2){compteur++}

let a3 = 0
let b3 = false
console.log(JSON.stringify(a3) + " == " + JSON.stringify(b3) + " -> " + (a3==b3))
console.log(JSON.stringify(a3) + " === " + JSON.stringify(b3) + " -> " + (a3===b3))
if(a3==b3 && a3!==b3){compteur++}

let a4 = ""
let b4 = false
console.log(JSON.stringify(a4) + " == " + JSON.stringify(b4) + " -> " + (a4==b4))
console.log(JSON.stringify(a4) + " === " + JSON.stringify(b4) + " -> " + (a4===b4))
if(a4==b4 && a4!==b4){compteur++}

let a5 = null
let b5 = undefined
console.log(JSON.stringify(a5) + " == " + JSON.stringify(b5) + " -> " + (a5==b5))
console.log(JSON.stringify(a5) + " === " + JSON.stringify(b5) + " -> " + (a5===b5))
if(a5==b5 && a5!==b5){compteur++}

console.log("paires différentes : " + compteur)