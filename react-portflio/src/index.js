import  ReactDOM  from "react-dom";
import {createRoot} from "react-dom/client"
import App from "./App"
/*import "./index.css"*/
import "swiper/css/bundle";
import "./index.scss" 
import "swiper/css/bundle";

/* ReactDOM.render(<App/>,document.querySelector("#root")) */
const root = createRoot(document.querySelector("#root"))
root.render(<App/>)