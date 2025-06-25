import { Link } from "react-router-dom";
//import sytle from './styles/navbar-style.module.css'
export default function Navbar(){
    return(
        <nav>
            <ul>
                <li>
                    <link to="/">Home</link>
                </li>
                <li>
                    <link to="/Owner">Owner</link>
                </li>
            </ul>
        </nav>
    )
}