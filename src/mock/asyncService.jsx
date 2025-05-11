 export const products = [
    {
       
        name:'El eco de lo que fuimos',
        price:6000,
        description:'Cuando Clara regresa a su pueblo natal tras la muerte de su madre, se encuentra con cartas, objetos y recuerdos que despiertan una versión olvidada de sí misma. Lo que empieza como una limpieza de casa se convierte en una reconstrucción emocional, donde el amor, la culpa y el perdón entrelazan pasado y presente. Una novela íntima sobre lo que dejamos atrás y lo que aún podemos recuperar.',
        stock:5,
        category:'ofertas',
        img:'picsum.photos/id/57/200/300'
    },
    {
       
        name:'Sombra del invierno',
        price:13000,
        description:'Un thriller psicológico ambientado en un pueblo remoto atrapado por la nieve. Cuando un cadáver aparece junto a un lago congelado, la inspectora Nora Del Valle deberá enfrentarse no solo a un asesino meticuloso, sino también a su propio pasado enterrado. Cada pista la arrastra más profundo en un laberinto de secretos que los habitantes llevan años silenciando.',
        stock:5,
        category:'ofertas',
        img:'picsum.photos/id/70/200/300'
    },
    {
       
        name:'Códigos del silencio',
        price:13500,
        description:'Una joven hacker argentina, autodidacta y brillante, intercepta por accidente una red de comunicaciones encriptadas que exponen crímenes de alto nivel. Perseguida por agencias internacionales, deberá decidir si liberar la información al mundo o protegerse a sí misma y a su familia. Una historia que combina tecnología, suspenso y dilemas éticos en la era digital',
        stock:25,
        category:'mas vendidos',
        img:'picsum.photos/id/48/506/300'
    },
    {
       
        name:'Lo invisible existe',
        price:4800,
        description:'Un viaje fascinante a través de los velos de la realidad que solemos ignorar. Abre los ojos a un mundo donde la energía danza, las emociones dejan huellas palpables y los lazos que nos unen trascienden la distancia física.',
        stock:12,
        category:'nuevos',
        img:'picsum.photos/id/114/506/300'
    },
    {
       
        name:'Fotografías en venta',
        price:13700,
        description:'Fotografías en venta es tu ventana a un universo de imágenes cautivadoras, capturadas con pasión y ojo artístico. Desde paisajes que roban el aliento hasta retratos que narran historias silenciosas, pasando por la vibrante energía de la vida urbana y la delicada belleza de la naturaleza, esta colección ofrece una diversidad de estilos y temas para cada gusto y ambiente.',
        stock:2,
        category:'ofertas',
        img:'picsum.photos/id/250/506/300'
    },
    {
       
        name:'Hola, estamos conectados!',
        price:3900,
        description:'Una invitación a explorar el fascinante mundo de las conexiones humanas en la era digital. Sumérgete en un análisis profundo y accesible sobre cómo la tecnología ha transformado la forma en que nos comunicamos, interactuamos y construimos relaciones.',
        stock:7,
        category:'nuevos',
        img:'picsum.photos/id/192/506/300'
    },
    {
       
        name:'Soy Alex',
        price:13000,
        description:'Una invitación a explorar el fascinante mundo de las conexiones humanas en la era digital. Sumérgete en un análisis profundo y accesible sobre cómo la tecnología ha transformado la forma en que nos comunicamos, interactuamos y construimos relaciones.',
        stock:7,
        category:'mas vendidos',
        img:'picsum.photos/id/103/506/300'
    },
    {
       
        name:'Jardines de Marte',
        price:17000,
        description:'En un futuro cercano, la humanidad ha comenzado a terraformar Marte. Ana Lleras, una experta en botánica y ecología, es enviada para liderar el primer invernadero experimental. Pero mientras la vida comienza a florecer en el planeta rojo, Ana descubre que no todo lo que crece allí es natural… ni inofensivo. Una novela de ciencia ficción que mezcla belleza, soledad y misterio.',
        stock:5,
        category:'nuevos',
        img:'picsum.photos/id/70/506/300'
    }

]

export const getProducts = () => {
    return new Promise((resolve, reject)=>{
        let error= false
        setTimeout(()=>{
            if(error){
                reject('No hay data ')
            }else{
                resolve(products)
            }
        },3000)
    })
}


export const getOneProduct = (id)=>{
    return new Promise((resolve)=>{
        let productFound= products.find((prod)=> prod.id === id)
        setTimeout(()=>{
            resolve(productFound)
        },1500)
    })
}
