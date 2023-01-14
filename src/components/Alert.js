import "../css/alert.css"
import EditBtn from "./EditBtn";
// import { useState, useEffect } from "react";
// import {useLocation} from "react-router-dom";
// import TemplateCard from "./TemplateCard";

function Alert ({ criminals, api }) {
    let discharge = null
        if (criminals !== null) {
            const filterCriminal = criminals.filter((criminal) => {
                const today = new Date(Date.now())  //.toLocaleDateString();
                const dateOfDischarge = new Date(criminal.dod)  //.toLocaleDateString();
                const dateOfSentence = new Date(criminal.dos)  //.toLocaleDateString();
                return (today >= dateOfDischarge || today >= dateOfSentence) && !criminal.discharge
            })
            discharge = filterCriminal
        }
    console.log(discharge, api)

    // const { pathname } = useLocation();
    const closeNotification = function ( ) {
        document.querySelector(".cms__alert").style.display = "none"
    }

    const closeNotificationCard = function (e) {
        e.stopPropagation()
       e.target.closest(".cms__alert_container").style.display = "none";
        // console.log(parent)
    }


    return (
        discharge &&
        <div className="position-fixed cms__alert">
            <div className="text-white position-absolute end-0 m-4 close" onClick={closeNotification}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                     className="bi bi-x-square-fill" viewBox="0 0 16 16">
                    <path
                        d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"/>
                </svg>
            </div>

            <div className="cms__alert__badge rounded-circle bg-danger m-3 text-center d-flex justify-content-center align-items-center">
                <h3 className="m-0">{discharge?.length}</h3>
            </div>

            {
                discharge && discharge.map(criminal => (
                    <div className="cms__alert_container position-absolute top-50 start-50 translate-middle">
                        <div className="card cms__alert_card position-relative close bg-secondary" >
                            <div className="text-danger position-absolute end-0 m-2" onClick={closeNotificationCard}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                     className="bi bi-x-square-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"/>
                                </svg>
                            </div>
                            <div className="image">
                                <img src={`${api}/${criminal.imageUrl}`} alt="profile" />
                            </div>
                            <div className="card-text p-3">
                                <div className="h4">{criminal.sname}</div>
                                <div className="meta">
                                   <span
                                       className={`badge bg-${
                                           criminal.crime
                                               ? "danger"
                                               : null
                                       } rounded-pill d-inline position-absolute end-0 mx-3 p-2`}
                                   >
                                      {criminal.dos ? (new Date(criminal.dos)).toLocaleDateString() : (new Date(criminal.dod)).toLocaleDateString()}
                                    </span>
                                </div>
                                <div className="description text-wrap">{criminal.address}</div>
                            </div>
                                <div className="card-footer text-end">
                                    <EditBtn pre={"criminal"} id={criminal._id} />
                                </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Alert