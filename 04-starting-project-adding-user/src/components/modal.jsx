import React from 'react'
import './modal.css'

export default function Modal({ isOpen, closeModal }) {

    if (isOpen) {
        return (
            <div className="Modal_background" onClick={closeModal}>
                <div className="Modal_box">
                    <div className="Modal_box_title_error">Invalid Input</div>
                    <div className='Modal_box_error-message'>Please enter a valid Input</div>
                    <div className='Modal_box_button'><button onClick={closeModal}>Okay</button></div>
                </div>
            </div>
        )
    }
    return null
}
