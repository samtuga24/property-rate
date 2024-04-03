import axios from 'axios';
import React, { useState } from 'react'

export const EditArrears = () => {
    const [result, setResult] = useState();
    const [tin, setTin] = useState()
    const [arrears, setArrears] = useState();

    const submit = () => {
        console.log(tin)
        console.log(arrears)
        axios.patch(`http://localhost:8080/arrears-update/${tin}/${arrears}`)
            .then(response => {
                setResult(response.data)
            })
            .catch((error) => console.log(error))
    }
    return (
        <div className='add-company-container'>
            <div className='add-company-wrapper'>
                <div className='edit-result'>{result}</div>
                <div className='text-input'><input type="text" name='company' value={tin} onChange={(e) => setTin(e.target.value)} placeholder='TIN' /></div>
                <div className='text-input'><input type="text" name='propertyId' value={arrears} onChange={(e) => setArrears(e.target.value)} placeholder='Arrears' /></div>
                <div className='edit-button' onClick={submit}>Update Arrears</div>
            </div>
        </div>
    )
}
