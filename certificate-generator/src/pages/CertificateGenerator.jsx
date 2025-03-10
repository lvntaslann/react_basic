import React, { useReducer, useState } from 'react'
import styles from '../assets/styles/certificateGenerator.module.scss'
import Modal from '../components/Modal';
import Certificate from '../view/Certificate';

const initialState = {
    name: "Levent Aslan",
    course: "Flutter",
    dateOfConductStart: "2024-01-01",
    dateOfConductEnd: "2024-01-31",
    signature: "",
    signatureDetails: "CEO google",
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'TEXT_CHANGE':
            return { ...state, [action.field]: action.payload }

        default:
            break
    }
}

const CertificateGenerator = () => {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [formState, dispatch] = useReducer(reducer, initialState)

    const handleSubmitForm = e => {
        e.preventDefault()
        const { name, course, dateOfConductStart, dateOfConductEnd, signature, signatureDetails } = formState

        if (name && course && dateOfConductStart && dateOfConductEnd && signature && signatureDetails) {
            console.log(`form submitted!!!: `, formState)

            setIsOpenModal(true)
        } else {
            alert('Please fill all details')
        }
    }

    const handleTextChange = e => {
        dispatch({ type: 'TEXT_CHANGE', field: e.target.name, payload: e.target.value });
    }

    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <form onSubmit={handleSubmitForm}>
                        <div className={styles.inputGroup}>
                            <label htmlFor="user-name">Name</label>
                            <input type="text" name='name' value={formState.name} id='user-name' onChange={handleTextChange} />
                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="course">Course</label>
                            <input type="text" name='course' value={formState.course} id='course' onChange={handleTextChange} /> {/* onChange eklendi */}
                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="dateOfConductStart">Date of conduct start</label>
                            <input type="date" name='dateOfConductStart' value={formState.dateOfConductStart} id='dateOfConductStart' onChange={handleTextChange} />
                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="dateOfConductEnd">Date of conduct end</label>
                            <input type="date" name='dateOfConductEnd' value={formState.dateOfConductEnd} id='dateOfConductEnd' onChange={handleTextChange} />
                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor='signature'>Signature</label>
                            <input
                                type='file'
                                name='signature'
                                id='signature'
                                onChange={e => {
                                    const selected = e.target.files[0]

                                    const objectUrl = URL.createObjectURL(selected)

                                    dispatch({ type: 'TEXT_CHANGE', field: e.target.name, payload: { ...selected, preview: objectUrl } })
                                }}
                            />
                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="signatureDetails">Signature details</label>
                            <input type="text" name='signatureDetails' value={formState.signatureDetails} id='signatureDetails' onChange={handleTextChange} />
                        </div>

                        <button type='submit'>Generate certificate</button>
                    </form>
                </div>
            </div>
            <Modal isOpen={isOpenModal} handleClose={() => setIsOpenModal(false)}><Certificate {...formState}/></Modal>
        </>
    )
}

export default CertificateGenerator
