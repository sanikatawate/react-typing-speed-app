import React from "react";

const Modal = ({ toggleModal, data }) => {
    return (
        <div className="modal">
            <p>{data}</p>
            <button onClick={() => toggleModal(false)}>Close</button>
        </div>
    );
}
 
 
export default Modal;