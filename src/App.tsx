import {React, useState} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./Components.css"
import {MainPage} from "./first_tab.tsx";
import {StoragePage} from "./second_tab.tsx";
import {Navbar} from "./navbar.tsx";


const App = () => {

    return (
            <>
                <BrowserRouter>
                    <Navbar />
                    <Routes>
                        <Route exact path="/" Component={MainPage} />
                        <Route path="/mainPage" Component={MainPage}/>
                        <Route path="/storagePage" Component={StoragePage}/>
                    </Routes>
                </BrowserRouter>
            </>
        );
}


export default App;

