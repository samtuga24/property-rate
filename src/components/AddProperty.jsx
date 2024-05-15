import axios from 'axios';
import React, { useEffect, useState } from 'react'

export const AddProperty = () => {
    const [company, setCompany] = useState();
    const [result, setResult] = useState();
    const [form, submitForm] = useState({
        propertyId: "",
        category: "",
        rateableValue: "",
        rate: "",
    })

    const onUpdateForm = e => {
        const newFormState = {
            ...form,
            [e.target.name]: e.target.value.toUpperCase()
        };
        submitForm(newFormState)
    }


    console.log(form)
    console.log(company)
    if (form.category == 'C1') {
        form.rate = 0.003301
    } else if (form.category == 'C2') {
        form.rate = 0.003112
    } else if (form.category == 'C3') {
        form.rate = 0.001908
    } else if (form.category == 'R1') {
        form.rate = 0.000255
    } else if (form.category == 'R2') {
        form.rate = 0.000222
    } else if (form.category == 'R3') {
        form.rate = 0.000201
    } else if (form.category == 'HI') {
        form.rate = 0.023333
    } else if (form.category == 'LI') {
        form.rate = 0.002071
    } 
    else if (form.category == 'MX') {
        form.rate = 0.002133
    }else{
        form.rate = 0.00
    }

    const submit = () => {
        console.log(form)
        axios.post(`http://localhost:8080/update-property/${company}`, form)
            .then(response => {
                setResult(response.data)

            })
            .catch((error) => console.log(error))
    }

    console.log(result)

    return (
        <div className='add-company-container'>
            <div className='add-company-wrapper'>
                <div className='result'>{result}</div>
                <div className='text-input'><input type="text" name='company' value={company} onChange={(e) => setCompany(e.target.value)} placeholder='TIN' /></div>
                <div className='text-input'><input type="text" name='propertyId' value={form.propertyId} onChange={onUpdateForm} placeholder='Property ID' /></div>
                <select name="category" value={form.category} onChange={onUpdateForm} id="" className='category-select'>
                    <option value="" disabled={true}>Category</option>
                    <option value="C1">C1</option>
                    <option value="C2">C2</option>
                    <option value="C3">C3</option>
                    <option value="R1">R1</option>
                    <option value="R2">R2</option>
                    <option value="R3">R3</option>
                    <option value="HI">HI</option>
                    <option value="LI">LI</option>
                    <option value="MX">Mx</option>
                </select>
                <div className='text-input'><input type="text" name='rateableValue' value={form.rateableValue} onChange={onUpdateForm} placeholder='Rateable Value' /></div>
                <div className='text-input'><input type="text" name='rate' value={form.rate} onChange={onUpdateForm} placeholder='Rate' /></div>
                <div className='text-input'><input type="text" value={form.rateableValue * form.rate} placeholder='Bill Amount' /></div>
                <div className='add-button' onClick={submit}>Add Property</div>
            </div>
        </div>
    )
}
