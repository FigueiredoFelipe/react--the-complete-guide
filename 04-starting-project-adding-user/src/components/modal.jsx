import React from 'react'
import classes from './modal.module.css'

export default function Modal({ isOpen, closeModal, feedBack }) {

    if (isOpen) {
        return (
            <div className={classes.Modal_background} onClick={closeModal}>
                <div className={classes.Modal_box}>
                    <div className={classes.Modal_box_title_error}>Invalid Input</div>
                    <div className={classes.Modal_box_error_message}>Please enter a valid {feedBack}</div>
                    <div className={classes.Modal_box_button}><button onClick={closeModal}>Okay</button></div>
                </div>
            </div>
        )
    }
    return null
}
