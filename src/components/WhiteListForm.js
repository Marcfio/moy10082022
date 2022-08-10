import React, {Fragment, useState} from "react";
import '../assets/styles/main.css'
import '../assets/styles/form.css'

const WhiteListForm = ({state, changeWhitelist}) => {

    const [datos, setDatos] = useState({
        email: ''
    })

    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const sendData = (event) => {
        event.preventDefault()
        console.log(datos.email)
    }

    return (
        <>
            {state && 
                <div className="overlay">
                    <Fragment>
                        <form className="container text-center bg-light py-4 whitelist" onSubmit={sendData}>
                            <h1 className="text-uppercase">Whitelist</h1>
                            <button className="cerrar" onClick={() => changeWhitelist(!state)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                                </svg>
                            </button>
                            <div className="row py-4">
                                <input type="email" name="email" className="form-control mx-auto" placeholder="mail@example.com" onChange={handleInputChange}></input>
                            </div>
                            <button className="blue-button" type="submit">Submit</button>
                        </form>
                    </Fragment>
                </div>
            }
        </>
    );
}
export default WhiteListForm;