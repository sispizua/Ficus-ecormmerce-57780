const productos =[
    {
        id: "hojhoas1",
        nombre: "Monstera Deliciosa",
        descripcion: "La Monstera Deliciosa, también conocida como Costilla de Adán, es una planta tropical de interior que destaca por sus grandes hojas verdes con cortes únicos. Ideal para dar un toque exótico a cualquier espacio, esta planta requiere luz indirecta y riego moderado.",
        categoria: "plantas",
        img: "/image/deliciosa.png",
        precio: 4500
    },
    {
        id: "hojtras1",
        nombre: "Monstera Adansonii",
        descripcion: "La Monstera Adansonii, con sus distintivas hojas agujereadas, es perfecta para añadir un toque de naturaleza a tu hogar. Requiere luz indirecta y riego regular.",
        categoria: "plantas",
        img: "/image/adansonii.webp",
        precio: 3000
    },
    {
        id: "adgre2",
        nombre: "Alocasia Amazonica",
        descripcion: "La Alocasia Amazonica es conocida por sus hojas en forma de flecha y su textura llamativa. Perfecta para interiores con luz filtrada y humedad alta.",
        categoria: "plantas",
        img: "/image/Amazonica.webp",
        precio: 3500
    },
    {
        id: "erghyj3",
        nombre: "Alocasia Zebrina",
        descripcion: "La Alocasia Zebrina es una planta de interior impresionante con tallos que presentan un patrón único de rayas. Necesita luz indirecta y suelo bien drenado.",
        categoria: "plantas",
        img: "/image/zebrina.png",
        precio: 5300
    },
    {
        id: "trhwer4",
        nombre: "Pilea",
        descripcion: "La Pilea, también conocida como planta del dinero chino, es una planta de interior popular por sus hojas redondeadas y fáciles de cuidar. Ideal para espacios luminosos y riego moderado.",
        categoria: "plantas",
        img: "/image/pilea.webp",
        precio: 2300
    },
    {
        id: "ertey5",
        nombre: "Sustrato universal",
        descripcion: "El sustrato universal es ideal para todo tipo de plantas de interior y exterior. Proporciona una base rica en nutrientes y un excelente drenaje para un crecimiento saludable.",
        categoria: "sustratos",
        img: "/image/sustrato.png",
        precio: 4300
    },
    {
        id: "jtyju6",
        nombre: "Sustrato para Cactus",
        descripcion: "El sustrato para cactus está formulado específicamente para suculentas y cactus, ofreciendo el drenaje y la aireación necesarios para estas plantas.",
        categoria: "sustratos",
        img: "/image/sustrato-cactus.png",
        precio: 4300
    },
    {
        id: "jukuy7",
        nombre: "Sustrato orquídeas",
        descripcion: "El sustrato para orquídeas proporciona la mezcla perfecta de aireación y retención de humedad, ideal para el cultivo de orquídeas saludables y florecientes.",
        categoria: "sustratos",
        img: "/image/sustato-orquideas.jpg",
        precio: 4300
    },
    {
        id: "wthnf8",
        nombre: "Maceta de barro n° 13",
        descripcion: "La maceta de barro n° 13 es perfecta para plantas pequeñas y medianas, ofreciendo un ambiente natural y transpirable para sus raíces. Su diseño clásico se adapta a cualquier decoración.",
        categoria: "macetas",
        img: "/image/maceta-13.webp",
        precio: 3000
    },
    {
        id: "zxbhay9",
        nombre: "Maceta de barro n° 5",
        descripcion: "La maceta de barro n° 5 es ideal para plantas pequeñas, brindando una excelente aireación y drenaje. Su apariencia rústica complementa cualquier espacio verde.",
        categoria: "macetas",
        img: "/image/maceta-15.webp",
        precio: 3000
    },
    {
        id: "pñijjh10",
        nombre: "Maceta de barro n° 27",
        descripcion: "La maceta de barro n° 27 es perfecta para plantas medianas a grandes, ofreciendo una gran estabilidad y un aspecto natural que realza cualquier planta.",
        categoria: "macetas",
        img: "/image/maceta-27.webp",
        precio: 3200
    },
    {
        id: "rtwrf11",
        nombre: "Maceta de barro n° 35",
        descripcion: "La maceta de barro n° 35 es ideal para plantas grandes, proporcionando un ambiente espacioso y aireado para sus raíces. Su diseño atemporal se adapta a cualquier estilo.",
        categoria: "macetas",
        img: "/image/maceta-35.webp",
        precio: 3500
    },
    {
        id: "artert12",
        nombre: "Plato de barro",
        descripcion: "El plato de barro es el complemento perfecto para cualquier maceta, ayudando a retener el exceso de agua y evitando manchas en las superficies.",
        categoria: "macetas",
        img: "/image/plato-barro.webp",
        precio: 1300
    }
]
const obtenerProdutos = () => {
    return new Promise ( (resolve, reject) => {
        //simulamos un retraso de red de 3 segundos
        setTimeout(()=> {
            resolve(productos)
        }, 2000)
    })
}

export { obtenerProdutos }