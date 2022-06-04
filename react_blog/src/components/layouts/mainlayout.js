import React, {useState} from "react";
import {Link} from "react-router-dom";
import Modal from "./modal";
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import { fa-solid fa-house } from '@fortawesome/free-solid-svg-icons';


const MainLayout = (props) => {
    const [openModal, setOpenModal] = useState(false)
    const toggleOpen = () => setOpenModal(value => !value);

    return (
        <div className="navbar">
            <div><Link className="brand" to={`/home`}>AnimeBlog</Link></div>
            <div className="navRight">

                {/*Link is used instead of a tag because the href in a tag might not be secure for react*/}
                <div className="navLinks modal">
                    <h3 onClick={toggleOpen}>Modal</h3>
                    {openModal && <Modal closeModal={setOpenModal}/>}
                </div>


                <div className="navLinks">
                    <Link to="#">Facebook</Link>
                </div>

                <div className="navLinks">
                    <Link to="#">Twitter</Link>
                </div>

                <div className="navLinks">
                    <Link to="#">LinkedIn</Link>
                </div>

                <div className="navLinks">
                    <Link to="#">Log in</Link>
                </div>

            </div>
        </div>
    )
}

export default MainLayout;