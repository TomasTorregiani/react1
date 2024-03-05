import React, { useEffect } from "react";

const Nosotros = () => {

    const clickear = () => {
        console.log("Click");
    }

    useEffect (() => {
        window.addEventListener("click", clickear)
            document.getElementById("h1") 
            return (() => {
            window.removeEventListener("click", clickear)
        }) 

    }, [])  

    return (
        <div className="container">
            <h1 className="main-title" id="h1">Nosotros</h1>

        </div>
    )
}

export default Nosotros;