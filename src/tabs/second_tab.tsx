import {React} from "react";
import "../Components.css";
import {dataResult} from "../data_record.tsx";
import {StorageTable} from "../storage_table.tsx";

export const StoragePage = () => {
    return (
        <div className="backgroundOfPage">
            <div className="mainBlock">
                <div >
                    <StorageTable rows={dataResult}/>
                </div>
            </div>
        </div>
    )
}