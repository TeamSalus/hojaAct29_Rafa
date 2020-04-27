async function covid() {
    let resultado = await fetch("https://api.covid19api.com/summary")
    let resultadoJson = await resultado.json();
    console.log(resultadoJson.Countries)
    let datos = resultadoJson.Countries[this.value];
    var template = Handlebars.templates.datosPeticiones;
    document.getElementById("datosCOVID").innerHTML = template({
        datos: datos
    })
}

document.getElementById("pais").addEventListener("change", covid);


async function cargarPaises(){

    let resultado = await fetch("https://api.covid19api.com/summary")
    let resultadoJson = await resultado.json();
    var arrayPaises = [];
    for(var i=0; i<resultadoJson.Countries.length; i++){
        
       arrayPaises.push(resultadoJson.Countries[i].Country);
       
    }
    console.log(arrayPaises)
    var template = Handlebars.templates.cargarPaises;
    document.getElementById("pais").innerHTML = template({
        paises: arrayPaises
    })
    
}

document.load = cargarPaises();