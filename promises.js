const promise = new Promise ((resolve, reject) => {
      var name = 'joao';

      if ( name === 'joao') {
         resolve(' promessa concluida');
      } else {
        reject (' promessa não cumprida');
      }        
    })
promise.then((data) => {

    return data.ToUpperCase();

}).then((data)  =>  {
      console.log(error);
}).catch((error) => {
    console.log(error);
})

const host = 'https://dattebayo-api.onrender.com'

fetch(`${host}/characters`, {
     method:"GET",
     headers: {
        Accept: "application/json"
     }    
}).then((response) => {
     return response.json()
}).then((data) => {
      let naruto = data.characters [0]; 

     console.log (naruto.imagens[0])
      
   for (let count = 0;  count < naruto.jutsu.length; count++) {
    console.log(naruto.jutsu[count].toUpperCase())
   } 

   let count = 0;
   while(count < naruto.jutsu.length) {
    console.log(naruto.jutsu[count].toUpperCase())
    count++
   }
 }).catch((error)  => { 
    console.log(error)  
})