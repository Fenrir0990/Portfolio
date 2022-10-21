import { FaNode } from 'react-icons/fa';
import {IoLogoVue} from 'react-icons/io5'
import {GrMysql} from 'react-icons/gr'
import {
    SiCss3,
    SiJavascript,
    SiReact,SiRedux, 
    SiExpress,
    SiPostgresql
} from "react-icons/si"
import test1 from "../assets/test1.jpg"
import TutoApp from "../assets/TutoApp.PNG"
import MovieWolf from "../assets/MovieWolf.PNG"
import InfoFood from "../assets/InfoFood.PNG"
import MarvelComicApp from "../assets/MarvelComicsApp.jpg"

function calculateAge(birthday) {
    var birthday_arr = birthday.split("/");
    var birthday_date = new Date(birthday_arr[2], birthday_arr[1] - 1, birthday_arr[0]);
    var ageDifMs = Date.now() - birthday_date.getTime();
    var ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

export var data = {
    age: calculateAge("27/02/2002"),
    hobbies:["Martial Arts","Cook","Pets"],
    proyects:[
        {
            id:0,
            title:"TutoApp",
            deploid:false,
            urlR:"https://github.com/Fenrir0990/TutoApp",
            urlD:"",
            img:TutoApp,
            description:"En este proyecto realice un enlistado de tutoriales con su propio backend permitiendo crear, editar y eliminar los tutoriales. La principal herramienta en este proyecto fue Vue"
        },{
            id:1,
            title:"MovieWolf",
            deploid:false,
            urlR:"https://github.com/Fenrir0990/MovieWolf",
            urlD:"",
            img:MovieWolf,
            description:"La tipica aplicacion de peliculas que todos tienen, obviamente no podia faltar. Apoyandome en una Api externa de peliculas realice este proyecto con React"
        },{
            id:1,
            title:"InfoFood",
            deploid:false,
            urlR:"https://github.com/Fenrir0990/Pi_Food",
            urlD:"",
            img:InfoFood,
            description:"Este es mi proyecto individual del bootcamp de henry en el qeu realice una enciclopedia de recetas apoyandome de una appi externa"
        },{
            id:1,
            title:"MarvelComicsApp",
            deploid:false,
            urlR:"https://github.com/Fenrir0990/Marvel-Comics-App",
            urlD:"null",
            img:MarvelComicApp,
            description:"Este es mi proyecto final del bootcamp de henry en el que realice una plataforma con servivio por membrecias para el acceso a la alectura de comics de marvel."
        }
    ],
    techs: [
        {   
            id:1,
            name:"CSS",
            icon:<SiCss3 className='iconT'/>,
            description:" Lenguaje que maneja el diseño y presentación de las páginas web, es decir, cómo lucen cuando un usuario las visita.",
            experience:"1 año",
            type:"frontend"
        },{
            id:2,
            name:"JavaScript",
            icon:<SiJavascript className='iconT'/>,
            description:"JavaScript es un lenguaje de programación o de secuencias de comandos que te permite implementar funciones complejas en páginas web.",
            experience:"1 año",
            type:"leng"
        },{
            id:3,
            name:"React",
            icon:<SiReact className='iconT'/>,
            description:"Esto es una descripcion",
            experience:"1 año",
            type:"frontend"
        },{   
            id:4,
            name:"Redux",
            icon:<SiRedux className='iconT'/>,
            description:"Esto es una descripcion",
            experience:"1 año",
            type:"frontend"
        },{ 
            id:5,
            name:"Node",
            icon:<FaNode className='iconT'/>,
            description:"Esto es una descripcion",
            experience:"1 año",
            type:"backend"
        },{
            id:6,
            name:"Express",
            icon:<SiExpress className='iconT'/>,
            description:"Esto es una descripcion",
            experience:"1 año",
            type:"backend"
        },{
            id:7,
            name:"Postgres",
            icon:<SiPostgresql className='iconT'/>,
            description:"Esto es una descripcion",
            experience:"1 año",
            type:"backend"
        },{ 
            id:9,
            name:"Vue",
            icon:<IoLogoVue className='iconT'/>,
            description:"Esto es una descripcion",
            experience:"1 año",
            type:"frontend"
        },{
            id:11,
            name:"MySql",
            icon:<GrMysql className='iconT'/>,
            description:"Esto es una descripcion",
            experience:"1 año",
            type:"backend"
        }
        
    ]
} 