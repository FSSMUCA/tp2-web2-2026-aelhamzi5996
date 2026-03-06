let  valeurs = [0, 1, "", "0", null, undefined, NaN, false, [], {} ];
for(let i=0; i<10; i++){

    let val = valeurs[i] ;
    let affichage = String(val);

   if(val === ""){
    console.log("(chaine vide)");
   }
    
    if(val){
           console.log (affichage +  "-> truthy ")}
     else {console.log (affichage +  " -> falsy")

        } 
    }
    