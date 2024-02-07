import {React} from "react";
import "./modal_window.css"

export const Modal = ({active, setActive}) => {
    return (
        <div className={active ? "modal-active" : "modal"} onClick={() => setActive(false)}>
            <div className='modal-content'>
                <p>Your data has been accepted</p>
            </div>
        </div>
    )
}