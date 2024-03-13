import { NavLink } from "react-router-dom";
import "../Components.css"


export function Navbar() {
    return (
        <nav className="navbarBlock">
            <NavLink to="/mainPage" className="pageBlock">Main Page</NavLink>
            <NavLink to="/storagePage" className="pageBlock">Storage Page</NavLink>
            <NavLink to="/contentPage" className="pageBlock">Content Page</NavLink>
            <NavLink to="/infoPage" className="pageBlock">Information Page</NavLink>
        </nav>
    );
}
