const promise = new Promise((resolve, reject) => {
    var name = 'João'

    if (name != 1){
        resolve('Promessa concluida')
    } else {
        reject('promessa nao cumprida')
    }
})

promise.then((data) => {    
    //Tratando a resposta
    return data.toUpperCase()
}).then((data) => {
    console.log(data);
    //Mainupulando a resposta
}).catch((error) => {
    console.log(error)
}) //Captura de erro

////////////////////////////////////////////////
//API

const host = 'https://dattebayo-api.onrender.com'

fetch(`${host}/characters`, {
    method:  "GET",
    headers: {
        Accept: "application/json"
    }
}).then((response) => {
    return response.json()
}).then((data) => {
    let naruto = data.characters[0];

    console.log(naruto.images[0])
    
    for (let count = 0; count < naruto.jutsu.length; count++) {
	console.log(naruto.jutsu[count].toUpperCase())
}

}).catch((error) => {
    console.log(error)
})


