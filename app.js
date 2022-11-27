window.addEventListener("load", inicio);

function inicio() {
    document.getElementById("mostrar").addEventListener("click", mostrarACoco);
}

const mostrarACoco = () => {
    document.getElementById("parrafo").innerHTML = "Buscando a Supercoco......";

    const fila = ['6', '5', '4', '3', '2', '1', '0'];
    const matriz = [];

    fila.map( f => {
       matriz.push([[`0,${f}`],[`1,${f}`],[`2,${f}`],[`3,${f}`],[`4,${f}`],[`5,${f}`],[`6,${f}`]]); 
    });
  
    let url = "https://donde-esta-supercoco.vercel.app/api/reto/3";
    let caracter = "1";
    let seg = 2000;
    lanzarPostApi(matriz,url,caracter,seg);
    caracter = "2";
    url = `${url}7`;
    seg = 4000;
    lanzarPostApi(matriz,url,caracter,seg);
    caracter = "3";
    url = `${url}P`;
    seg = 6000;
    lanzarPostApi(matriz,url,caracter,seg);
    caracter = "4";
    url = `${url}1`;
    seg = 8000;
    lanzarPostApi(matriz,url,caracter,seg);
    caracter = "5";
    url = `${url}C`;
    seg = 10000;
    lanzarPostApi(matriz,url,caracter,seg);
    caracter = "6";
    url = `${url}z`;
    seg = 11000;
    lanzarPostApi(matriz,url,caracter,seg);
    caracter = "7";
    url = `${url}1`;
    seg = 13000;
    lanzarPostApi(matriz,url,caracter,seg);
    caracter = "8";
    url = `${url}2`;
    seg = 15000;
    lanzarPostApi(matriz,url,caracter,seg);
    caracter = "9";
    url = `${url}P`;
    seg = 17000;
    lanzarPostApi(matriz,url,caracter,seg);
    caracter = "último";
    url = `${url}3`;
    seg = 19000;
    lanzarPostApi(matriz,url,caracter,seg);
    setTimeout(() => {
        const data={name: 'Tere'};
        const post = {
            method: 'POST',
            headers: { "Content-type": "application/x-www-form-urlencoded" },
            body: JSON.stringify(data),
        };
  
        fetch(url, post)
            .then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', response));
            document.getElementById("parrafo").innerHTML+=`<img src="https://donde-esta-supercoco-premio.vercel.app/api/premio?name=Tere&random=1" alt="mi premio"/><h2>Por aquí anda Supercoco</h2><iframe width="560" height="315" src="https://www.youtube.com/embed/F6sCivv6ndQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    },21000);
    
}
    const lanzarPostApi = (matriz,url,caracter,seg) => {
    setTimeout( () => {
        const caracterMatriz = [];
        document.getElementById("parrafo").innerHTML += `<h3>A por el ${caracter} caracter</h3>`;
        matriz.map( (e) => {
            for(let f=0; f<7; f++){
            const coordenada = e[f][0];
            const data = `{"checkpoint": "{${coordenada}}"}`;
            const post = {
                method: 'POST',
                headers: { "Content-type": "application/x-www-form-urlencoded" },
                body: data
            };
    
            fetch(url, post)
                .then((response) => response.json())
                .then((data) => {
                    console.log(`{${e[f]}}`, 'Success:', data);
                    if(data.status){
                        caracterMatriz.push(`${e[f]}`);
                        document.getElementById("parrafo").innerHTML += `{${e[f]}} `;
                    }
            })
                .catch((e) => {
                    console.log("Error: ", e);
            });
            }
    
        });
    
        return caracterMatriz;
    },seg);
}