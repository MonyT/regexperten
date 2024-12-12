import { motion } from "motion/react"

import './contact-modal.css'
import { useState } from "react"

type IcontactModal = {
    open: boolean
    onClose: () => void
}

export const ContactModal = ({ open, onClose }: IcontactModal) => {
    const [submitted, setSubmitted] = useState(false)
    const handleSubmit = async () => {
        setSubmitted(true)
    }

    const handleClose = () => {
        onClose()
        setSubmitted(false)
    }

    if (!open) return null

    return (
        <motion.div className='contact-modal' animate={{ y: -65, opacity: [0, 1] }}>
            <div className='contact-modal-content'>

                {!submitted ? <><p>På grund av så kallade robocalls har vi stängt av våra telefoner.</p>
                    <p>Fyll i formuläret nedan så kontaktar vi dig!</p>

                    <form className='contact-form'>
                        <input type='text' placeholder='Namn' />
                        <input type='text' placeholder='Telefonnummer' />
                        <textarea placeholder='Ärende' />
                        <button type='button' onClick={handleSubmit}>Skicka </button>
                    </form></> : <><h4>Skickat!</h4><p>
                        Nu är det vår tur att ta stafettpinnen. Invänta vårt samtal – det kommer snart, och vi kan knappt vänta på att höra din röst!</p> <button type='button' onClick={handleClose}>Stäng </button></>}
            </div>
        </motion.div>
    )
}