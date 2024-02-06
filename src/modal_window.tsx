import {React} from "react";
import "./Components.css"

export const Modal = ({active, setActive}) => {
    return (
        <div className={active ? "modal-active" : "modal"}>
            <div className='modal-content'>
                <p>Your data has been accepted</p>
            </div>
            <div>
                <button className='modal-button' onClick={() => setActive(false)}>Close</button>
            </div>
        </div>
    )
}