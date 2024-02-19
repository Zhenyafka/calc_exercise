import {React} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./Components.css";
import {Navbar} from "./tabs/navbar.tsx";
import {MainPage} from "./tabs/first_tab.tsx";
import {StoragePage} from "./tabs/second_tab.tsx";
import {ContentPage} from "./tabs/third_tab.tsx";


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

