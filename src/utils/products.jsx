const productos = [
    //placas de video
    {
        id: 1,
        title: "Radeon RX 6600 XT GAMING OC",
        description: "La capacidad de consecución, la frecuencia y la sostenibilidad del reloj Boost variarán en función de varios factores, incluidos, entre otros, las condiciones térmicas y la variación en las aplicaciones y las cargas de trabajo.",
        stock: 10,
        type: "placa de video",
        imageProduct: {
            firtsImage: "https://media.solotodo.com/media/products/1469342_picture_1633220942.png",
            secondImage: "https://media.solotodo.com/media/products/1469342_picture_1633220942.png"
        },
        price: 489990,
    },

    {
        id: 2,
        title: "ASUS Dual Radeon RX 7700 XT OC",
        description: "Aprovechando las tecnologías de refrigeración avanzadas derivadas de las principales tarjetas gráficas, el Dual opta por la sustancia sobre el estilo, la elección perfecta para una construcción bien equilibrada.",
        stock: 8,
        type: "placa de video",
        imageProduct: {
            firtsImage: "https://media.solotodo.com/media/products/1905102_picture_1713419727.jpg",
            secondImage: "https://media.solotodo.com/media/products/1905102_picture_1713419727.jpg"
        },
        price: 569990,
    },

    {
        id: 3,
        title: "MSI GeForce RTX 4070 VENTUS 2X",
        description: "Está construida con la arquitectura ultraeficiente NVIDIA Ada Lovelace. Experimenta el rápido trazado de rayos, el rendimiento acelerado por IA con DLSS 3, nuevas formas de crear y mucho más.",
        stock: 16,
        type: "placa de video",
        imageProduct: {
            firtsImage: "https://media.solotodo.com/media/products/1749691_picture_1681595550.png",
            secondImage: "https://media.solotodo.com/media/products/1749691_picture_1681595550.png"
        },
        price: 849990,
    },

    //procesadores
    {
        id: 4,
        title: "AMD Ryzen 5 5600GT",
        description: "El procesador AMD Ryzen 5 5600GT es una potente unidad de procesamiento con 6 núcleos y 12 hilos que ofrece un rendimiento excepcional para tareas de computación intensivas. Con una frecuencia base de 3.6GHz y una frecuencia turbo de hasta 4.6GHz.",
        stock: 3,
        type: "procesador",
        imageProduct: {
            firtsImage: "https://media.solotodo.com/media/products/1436922_picture_1628622735.png",
            secondImage: "https://media.solotodo.com/media/products/1436922_picture_1628622735.png"
        },
        price: 155990,      
    },

    {
        id: 5,
        title: "Intel Core i5-13400F",
        description: "El Core i5-13400F no incluye gráficos integrados, lo que significa que los usuarios deberán comprar una tarjeta gráfica dedicada por separado. Tenga en cuenta que NO se incluye una solución térmica. Este procesador está respaldado por una garantía de 3 años.",
        stock: 6,
        type: "procesador",
        imageProduct: {
            firtsImage: "https://media.solotodo.com/media/products/1720016_picture_1675936310.jpg",
            secondImage: "https://media.solotodo.com/media/products/1720016_picture_1675936310.jpg"
        },
        price: 206990,      
    },

    //mother
    {
        id: 6,
        title: "ASRock A520M Pro4",
        description: "Asrock A520M Pro4 es una placa base para todos, todo lo esencial que necesita para la informática. Disfrute de la tranquilidad de saber que el conjunto de chips AMD A520 le va a ofrecer en todo momento el rendimiento y la conectividad plug and play que necesita.",
        stock: 3,
        type: "placa madre",
        imageProduct: {
            firtsImage: "https://media.solotodo.com/media/products/1780043_picture_1689054995.jpg",
            secondImage: "https://media.solotodo.com/media/products/1780043_picture_1689054995.jpg"
        },
        price: 100990,      
    },

    {
        id: 7,
        title: "MSI PRO B660M-A WIFI DDR4",
        description: "La serie PRO ayuda a los usuarios a trabajar de manera más inteligente al brindar una experiencia eficiente y productiva. Con una funcionalidad estable y un ensamblaje de alta calidad, las placas base de la serie PRO brindan no solo flujos de trabajo profesionales optimizados, sino también menos resolución de problemas y longevidad.",
        stock: 1,
        type: "placa madre",
        imageProduct: {
            firtsImage: "https://media.solotodo.com/media/products/1718200_picture_1675694884.png"
        },
        price: 103990,      
    },

    //fuentes
    {
        id: 8,
        title: "Gigabyte GP-P450B",
        description: "80 PLUS BRONCE CERTIFICADO. La certificación 80 Plus Bronze garantiza una eficiencia del 85% al ??50% de carga. La mejor eficiencia energética conduce a menos desperdicio de energía, menos calor y menos ruido del ventilador.",
        stock: 7,
        type: "fuente",
        imageProduct: {
            firtsImage: "https://media.solotodo.com/media/products/1213261_picture_1597160931.jpg",
            secondImage: "https://media.solotodo.com/media/products/1213261_picture_1597160931.jpg"
        },
        price: 49990,      
    },

    {
        id: 9,
        title: "Thermalright TR-TG650S",
        description: "La Fuente de Poder Thermalright 650W 80 PLUS GOLD (TR-TG 650S) es la elección ideal para quienes buscan un rendimiento excepcional y una alta eficiencia energética. Con su certificación 80 Plus Gold, garantiza un uso óptimo de la energía, lo que se traduce en un menor consumo y un menor impacto ambiental.",
        stock: 9,
        type: "fuente",
        imageProduct: {
            firtsImage: "https://media.solotodo.com/media/products/1945764_picture_1724140128.png",
            secondImage: "https://media.solotodo.com/media/products/1945764_picture_1724140128.png"
        },
        price: 70990,      
    },

    {
        id: 10,
        title: "EVGA 600 GD",
        description:"La Fuente de Poder EVGA 600GD es una opción excepcional para aquellos que buscan una fuente de alimentación confiable y eficiente para su PC. Con una potencia total de 600 Watts, esta fuente está diseñada para satisfacer las necesidades de los sistemas más exigentes, garantizando un rendimiento óptimo en todo momento.",
        stock: 4,
        type: "fuente",
        imageProduct: {
            firtsImage: "https://media.solotodo.com/media/products/1014240_picture_1573622437.png",
            secondImage: "https://media.solotodo.com/media/products/1014240_picture_1573622437.png"
        },
        price: 83990,      
    },
]

export default productos;
