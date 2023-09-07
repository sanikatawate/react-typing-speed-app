import React from "react";

const Modal = ({ toggleModal }) => {
    return (
        <div className="modal">
            <p>Modal content</p>
            <button onClick={() => toggleModal(false)}>Close</button>
        </div>
    );
}
 
 
export default Modal;