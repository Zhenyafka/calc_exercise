import {React} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./Components.css";
import {Navbar} from "./navbar.tsx";
import {MainPage} from "./first_tab.tsx";
import {StoragePage} from "./second_tab.tsx";
import {ContentPage} from "./third_tab.tsx";


const App = () => {

    return (
            <>
                <BrowserRouter>
                    <Navbar />
                    <Routes>
                        <Route exact path="/" Component={MainPage} />
                        <Route path="/mainPage" Component={MainPage}/>
                        <Route path="/storagePage" Component={StoragePage}/>
                        <Route path="/contentPage" Component={ContentPage}/>
                    </Routes>
                </BrowserRouter>
            </>
        );
}


export default App;

