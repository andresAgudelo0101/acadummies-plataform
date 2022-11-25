import Estructura from "../../components/week1/Estructura";
import Instalacion from "../../components/week1/Instalacion";
import PrimerosPasos from "../../components/week1/PrimerosPasos";

export const contenido_semana1 = [
    {
        titulo:'instalacion',
        ruta:'instalacion',
        componente:Instalacion,
        url_video:'link.mp4',
        contenido:[
            {
                comentario:'si hola',
                url:'w3schol'
            },
            {
                comentario:'aaa',
                url:'git'
            },
            {   comentario:'333',
                url:'github'
            },
        ]
    },
    {
        titulo:'primeros pasos html',
        ruta:'primeros-pasos-html',
        componente:PrimerosPasos,
        url_video:'ad.mp4',
        contenido:[
            {
                comentario:'soy el mejor',
                url:'w3schol'
            },
            {
                comentario:'a',
                url:'amazon'
            },
        ]
    },
    {
        titulo:'estructura basica',
        ruta:'estructura',
        componente:Estructura,
        url_video:'videito.mp4',
        contenido:[
            {
                comentario:'',
                url:'w3schol'
            },

        ]
    }
]

