



let dataBase = [
    { id: 1, pizza: 'Mozzarella', precio: 2000, imagen: 'https://www.laespanolaaceites.com/wp-content/uploads/2019/06/pizza-con-tomate-albahaca-y-mozzarella-1080x671.jpg', descripcion: 'La mejor de las mejores pizzas del condado hecha por una persona con ganas de vivir' },
    { id: 2, pizza: 'Pepperoni', precio: 2000, imagen: 'https://resizer.glanacion.com/resizer/xO6YeHWSB4h8w_fbr3OnR1d7vrw=/768x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/5PEHFU6OI5CKRKR3RFH5EZMSSM.jpg', descripcion: 'La mejor de las mejores pizzas del condado hecha por una persona con ganas de vivir' },
    { id: 3, pizza: 'Chimi con Panceta', precio: 2000, imagen: 'https://www.clarin.com/img/2022/12/02/yjIsHW5oV_340x340__1.jpg', descripcion: 'La mejor de las mejores pizzas del condado hecha por una persona con ganas de vivir' },
    { id: 4, pizza: 'Pollo a la cerveza', precio: 2000, imagen: 'https://img.freepik.com/fotos-premium/pizza-pollo-vaso-cerveza-al-lado_863013-8866.jpg?w=2000', descripcion: 'La mejor de las mejores pizzas del condado hecha por una persona con ganas de vivir' },
    { id: 5, pizza: 'Palmitos', precio: 2000, imagen: 'https://productosmalu.com.ar/wp-content/uploads/b396e04803ad346d4380a1d6eab6a8ce.jpg', descripcion: 'La mejor de las mejores pizzas del condado hecha por una persona con ganas de vivir' },
    { id: 6, pizza: 'Calabresa', precio: 2000, imagen: 'https://pizzasargentinas.com/wp-content/uploads/2020/11/Pizza-de-calabresa-731x411.jpg', descripcion: 'La mejor de las mejores pizzas del condado hecha por una persona con ganas de vivir' },
    { id: 7, pizza: 'Champiñones', precio: 2000, imagen: 'https://cdn7.kiwilimon.com/recetaimagen/38841/640x640/50030.jpg.webp', descripcion: 'La mejor de las mejores pizzas del condado hecha por una persona con ganas de vivir' },
    { id: 8, pizza: 'Provoleta', precio: 2000, imagen: 'https://i0.wp.com/cuciniana.com/wp-content/uploads/cuciniana-receta-platos-salados-pizza-masa-madre-casera-queso-provolone-800.jpg?w=1200&ssl=1', descripcion: 'La mejor de las mejores pizzas del condado hecha por una persona con ganas de vivir' },
    { id: 9, pizza: 'Rúcula', precio: 2000, imagen: 'https://placeralplato.com/files/2016/07/pizza-de-polenta.jpg', descripcion: 'La mejor de las mejores pizzas del condado hecha por una persona con ganas de vivir' },
    { id: 10, pizza: 'Mariscos', precio: 2000, imagen: 'https://i.pinimg.com/originals/50/55/8b/50558bb9f81deb6d4f49fbb37ca76ce7.jpg', descripcion: 'La mejor de las mejores pizzas del condado hecha por una persona con ganas de vivir' },
    { id: 11, pizza: 'Choclo', precio: 2000, imagen: 'https://www.laespanolaaceites.com/wp-content/uploads/2019/06/pizza-con-tomate-albahaca-y-mozzarella-1080x671.jpg', descripcion: 'La mejor de las mejores pizzas del condado hecha por una persona con ganas de vivir' },
    { id: 12, pizza: 'Salchicha', precio: 2000, imagen: 'https://www.laespanolaaceites.com/wp-content/uploads/2019/06/pizza-con-tomate-albahaca-y-mozzarella-1080x671.jpg', descripcion: 'La mejor de las mejores pizzas del condado hecha por una persona con ganas de vivir' },
    { id: 13, pizza: 'Lomito de atún', precio: 2000, imagen: 'https://www.laespanolaaceites.com/wp-content/uploads/2019/06/pizza-con-tomate-albahaca-y-mozzarella-1080x671.jpg', descripcion: 'La mejor de las mejores pizzas del condado hecha por una persona con ganas de vivir' },
    { id: 14, pizza: 'Lomito de atún', precio: 2000, imagen: 'https://www.laespanolaaceites.com/wp-content/uploads/2019/06/pizza-con-tomate-albahaca-y-mozzarella-1080x671.jpg', descripcion: 'La mejor de las mejores pizzas del condado hecha por una persona con ganas de vivir' },
    { id: 15, pizza: 'Ananá', precio: 2000, imagen: 'https://www.laespanolaaceites.com/wp-content/uploads/2019/06/pizza-con-tomate-albahaca-y-mozzarella-1080x671.jpg', descripcion: 'La mejor de las mejores pizzas del condado hecha por una persona con ganas de vivir' },
    { id: 16, pizza: 'Cuatro quesos', precio: 2000, imagen: 'https://www.laespanolaaceites.com/wp-content/uploads/2019/06/pizza-con-tomate-albahaca-y-mozzarella-1080x671.jpg', descripcion: 'La mejor de las mejores pizzas del condado hecha por una persona con ganas de vivir' },
    { id: 17, pizza: 'Panceta', precio: 2000, imagen: 'https://www.laespanolaaceites.com/wp-content/uploads/2019/06/pizza-con-tomate-albahaca-y-mozzarella-1080x671.jpg', descripcion: 'La mejor de las mejores pizzas del condado hecha por una persona con ganas de vivir' },
    { id: 18, pizza: 'Anchoas', precio: 2000, imagen: 'https://www.laespanolaaceites.com/wp-content/uploads/2019/06/pizza-con-tomate-albahaca-y-mozzarella-1080x671.jpg', descripcion: 'La mejor de las mejores pizzas del condado hecha por una persona con ganas de vivir' },
    { id: 19, pizza: 'Napolitana', precio: 2000, imagen: 'https://www.laespanolaaceites.com/wp-content/uploads/2019/06/pizza-con-tomate-albahaca-y-mozzarella-1080x671.jpg', descripcion: 'La mejor de las mejores pizzas del condado hecha por una persona con ganas de vivir' },
    { id: 20, pizza: 'Roquefort', precio: 2000, imagen: 'https://www.laespanolaaceites.com/wp-content/uploads/2019/06/pizza-con-tomate-albahaca-y-mozzarella-1080x671.jpg', descripcion: 'La mejor de las mejores pizzas del condado hecha por una persona con ganas de vivir' },
    { id: 21, pizza: 'Huevo', precio: 2000, imagen: 'https://www.laespanolaaceites.com/wp-content/uploads/2019/06/pizza-con-tomate-albahaca-y-mozzarella-1080x671.jpg', descripcion: 'La mejor de las mejores pizzas del condado hecha por una persona con ganas de vivir' },
    { id: 22, bebida: 'Coca Cola', valor: 1000, img: 'https://cdn-3.expansion.mx/dims4/default/1b14363/2147483647/strip/true/crop/2096x1430+0+0/resize/1200x819!/format/webp/quality/60/?url=https%3A%2F%2Fcdn-3.expansion.mx%2F95%2F6c%2F722abfb544dcb4a46b9ca967a1ef%2Fistock-499925476.jpg', descrip: 'Refresco carbonatado de cola' },
    { id: 23, bebida: 'Agua Mineral', valor: 800, img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/798/865/products/48146782-8488201d17fe506c1f16639330522874-640-0.webp', descrip: 'Agua saborizada' },
    { id: 24, bebida: 'Agua Saborizada', valor: 1000, img: 'https://jumboargentina.vtexassets.com/arquivos/ids/782893/Agua-Saborizada-Aquarius-Pera-2-25-Lt-2-468830.jpg?v=638206690050300000', descrip: 'De distintos sabores: Manzana, Pera, Limon' },
    { id: 25, bebida: 'Quilmes negra', valor: 800, img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/798/865/products/quilmes1-305f1b49f7a52781ca16739793409986-640-0.webp', descrip: '1lts ' },
    { id: 26, bebida: 'Andes Rubia', valor: 800, img: 'https://www.bridgerconway.com/wp-content/uploads/2020/07/BRIDGER-CONWAY-1.jpg', descrip: '1lts ' },
    { id: 28, bebida: 'Andes Roja', valor: 800, img: 'https://i.pinimg.com/originals/6e/60/24/6e6024cb307d6aa8637870778e27e772.jpg', descrip: '1lts ' },
    { id: 29, bebida: 'Andes Negra', valor: 800, img: 'https://www.lavoz.com.ar/resizer/OiEiFwZR7Dn5bww9AgTIQ0bfxhM=/980x640/smart/filters:quality(75):format(webp)/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/Y2YOM25JWRAPJEFB4S2YBYB524.jpg', descrip: '1lts ' },
    { id: 30, bebida: 'Andes Ipa Imperial', valor: 800, img: 'https://supercristian.com.ar/wp-content/uploads/2021/02/88541.jpg', descrip: '1lts ' },
    { id: 31, bebida: 'Stella Artois', valor: 800, img: 'https://www.stellaartois.com.mx/sites/g/files/seuoyk556/files/2022-08/stella-artois%201.png.webp', descrip: '1lts ' },
    { id: 31, bebida: 'Brahma', valor: 800, img: 'https://pxc.cdn.ellitoral.com.ar/litoral/052021/1622224065224/0020_049%20(2)%20(1).jpg', descrip: '1lts ' },





    

]

module.exports = dataBase;