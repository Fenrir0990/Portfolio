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
            description:"In this project make a list of tutorials with its own backend allowing you to create, edit and delete the tutorials. The main tool in this project was Vue"
        },{
            id:1,
            title:"MovieWolf",
            deploid:false,
            urlR:"https://github.com/Fenrir0990/MovieWolf",
            urlD:"",
            img:MovieWolf,
            description:"The typical movie application that everyone has, obviously could not be missing. Leaning on an external movie API, I made this project with React"
        },{
            id:1,
            title:"InfoFood",
            deploid:false,
            urlR:"https://github.com/Fenrir0990/Pi_Food",
            urlD:"",
            img:InfoFood,
            description:"This is my individual project from henry's bootcamp in which I made an encyclopedia of recipes using an external app"
        },{
            id:1,
            title:"MarvelComicsApp",
            deploid:false,
            urlR:"https://github.com/Fenrir0990/Marvel-Comics-App",
            urlD:"null",
            img:MarvelComicApp,
            description:"This is my final project from henry's bootcamp in which I made a platform with a membership service for access to reading marvel comics."
        }
    ],
    techs: [
        {   
            id:0,
            name:"HTML",
            icon:<SiCss3 className='iconT'/>,
            description:" HTML stands for HyperText Markup Language. This is the name given to the programming language used in the development of Web pages.",
            experience:"1 año",
            type:"frontend"
        },
        {   
            id:1,
            name:"CSS",
            icon:<SiCss3 className='iconT'/>,
            description:" Language that manages the design and presentation of web pages, that is, how they look when a user visits them.",
            experience:"1 año",
            type:"frontend"
        },{
            id:2,
            name:"JavaScript",
            icon:<SiJavascript className='iconT'/>,
            description:"JavaScript is a programming or scripting language that allows you to implement complex functions on web pages.",
            experience:"1 año",
            type:"leng"
        },{
            id:3,
            name:"React",
            icon:<SiReact className='iconT'/>,
            description:"React is a Javascript library focused on the development of user interfaces. This is how the bookstore itself is defined and obviously, that is its main area of ​​work.",
            experience:"1 año",
            type:"frontend"
        },{   
            id:4,
            name:"Redux",
            icon:<SiRedux className='iconT'/>,
            description:"Redux is a data architecture pattern that allows application state to be handled in a predictable way.",
            experience:"1 año",
            type:"frontend"
        },{ 
            id:5,
            name:"Node",
            icon:<FaNode className='iconT'/>,
            description:"Node.js is an event-driven environment designed to build scalable applications, allowing you to establish and manage multiple connections at the same time.",
            experience:"1 año",
            type:"backend"
        },{
            id:6,
            name:"Express",
            icon:<SiExpress className='iconT'/>,
            description:"Express is a minimalistic, fast and Sinatra-like Node.js backend framework that provides robust features and tools for developing scalable backend applications.",
            experience:"1 año",
            type:"backend"
        },{
            id:7,
            name:"Postgres",
            icon:<SiPostgresql className='iconT'/>,
            description:"PostgreSQL is an open source relational database management system.",
            experience:"1 año",
            type:"backend"
        },{ 
            id:9,
            name:"Vue",
            icon:<IoLogoVue className='iconT'/>,
            description:"Vue is an open source JavaScript framework, which allows us to build user interfaces in a very simple way.",
            experience:"1 año",
            type:"frontend"
        },{
            id:11,
            name:"MySql",
            icon:<GrMysql className='iconT'/>,
            description:"MySQL is an open source relational database management system (RDBMS) backed by Oracle and based on the Structured Query Language (SQL).",
            experience:"1 año",
            type:"backend"
        },{
            id:12,
            name:"MySql",
            icon:<GrMysql className='iconT'/>,
            description:"MySQL is an open source relational database management system (RDBMS) backed by Oracle and based on the Structured Query Language (SQL).",
            experience:"1 año",
            type:"backend"
        }
        
    ]
} 