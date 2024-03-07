import { NavLink } from "react-router-dom";
import "../Components.css"


export function Navbar() {
    return (
        <nav className="navbarBlock">
            <NavLink to="/mainPage">Main Page</NavLink>
            <NavLink to="/storagePage">Storage Page</NavLink>
            <NavLink to="/contentPage">Content Page</NavLink>
            <NavLink to="/infoPage">Information Page</NavLink>
        </nav>
    );
}
