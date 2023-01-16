
    let nombre = ["0","1","2","3","4","5","15","90","99","100","115","667","5421",]
    
    
    function transform(array){
    let nom=[];

         for(let i=0; i<nombre.length; i++){
            if(nombre[i]%3==0 &&  nombre[i]%5==0){
                nom.push("fizzbuzz");
            }

          else  if( nombre[i]%3===0 ){
                nom.push("fizz");   
            }
            else if( nombre[i]%5 ===0){
                        nom.push("buzz");
            }
            else if(nombre[i]%3!==0 &&  nombre[i]%5!==0){
                nom.push("nothing");
            }
          

         }
            return nom;

    } 
    console.log( transform(nombre));
    
    

