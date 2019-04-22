// PRIMERO CREAMOS UNA VARIABLE QUE CONTIENE TODOS LOS DATOS DE TUS TRABAJOS
var trabajos = [
{
    figure: "media/foto-01.jpg",
    title: "Static",
    about: "Objeto que mediante estática levanta las migas en lugares peligrosos de limpiar",
}, {
    figure: "media/foto-02.jpg",
    title: "Modelado 3D",
    about: "Modelado 3D a través del programa Rhinoceros y renderizado en Keyshot",
}, {
    figure: "media/foto-03.jpg",
    title: "KOR",
    about: "Producto que protege la zona del muñón en personas amputadas de extremidades superior",
}, {
    figure: "media/foto-04.jpg",
    title: "Discop",
    about: "Pulsera que ayuda a monitorear las fiestas masivas y permite que el asistente interactúe con el DJ",
}, {
    figure: "media/foto-05.jpg",
    title: "Portada Vinilo",
    about: "Proyecto de diseño gráfico de la portada de un vinilo del álbum de Carlos Gardel",
}, {
    figure: "media/foto-06.jpg",
    title: "Troda",
    about: "Adaptación de silla de ruedas para hacer posible el bajar por escaleras de emergencia sin mayor complicación",
}, {
    figure: "media/foto-07.jpg",
    title: "Llaveros de presentación",
    about: "Llaveros de presentación fabricados a través de corte laser",
}, {
    figure: "media/foto-08.jpg",
    title: "Limpa",
    about: "Producto textil hecho para lavar prendas intimas de manera personal y con la menor agua posible, en contexto de albergues",
}
]
// LUEGO CREAMOS PARTES DEL SITIO CON CADA DATO CONTENIDO EN LA VARIABLE
$.each(trabajos, function(i, val) {
    var uno = '<figure><img src="' + trabajos[i].figure + '"/></figure>';
    var dos = '<h4>' + trabajos[i].title + '</h4>';
    var tres = '<p>' + trabajos[i].about + '</p>';
    $('#portafolio').append('<div class="item">' + uno + dos + tres + '</div>')
});
