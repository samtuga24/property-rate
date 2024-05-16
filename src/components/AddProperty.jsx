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
        arrears_rate: ""
    })

    const onUpdateForm = e => {
        const newFormState = {
            ...form,
            [e.target.name]: e.target.value.toUpperCase()
        };
        submitForm(newFormState)
    }

    if (form.category == 'C1') {
        form.rate = 0.003301
        form.arrears_rate = 0.002913
    } else if (form.category == 'C2') {
        form.rate = 0.003112
        form.arrears_rate = 0.002218
    } else if (form.category == 'C3') {
        form.rate = 0.002908
        form.arrears_rate = 0.002201
    } else if (form.category == 'R1') {
        form.rate = 0.000255
        form.arrears_rate = 0.000255
    } else if (form.category == 'R2') {
        form.rate = 0.000222
        form.arrears_rate = 0.000222
    } else if (form.category == 'R3') {
        form.rate = 0.000201
        form.arrears_rate = 0.000201
    } else if (form.category == 'HI') {
        form.rate = 0.023333
        form.arrears_rate = 0.023333
    } else if (form.category == 'LI') {
        form.rate = 0.002071
        form.arrears_rate = 0.002017
    } 
    else if (form.category == 'MX') {
        form.rate = 0.002133
        form.arrears_rate = 0.002133
    }else{
        form.rate = 0.00
    }
    let c1;
    let c2;
    let c3;
    let r1;
    let r2;
    let r3;
    let r4;
    let hi;
    let li;
    let mx;

    if(form.category == 'C1' && form.rateableValue * form.rate < 300){
        c1 = 300
    }else{
        c1 = form.rateableValue * form.rate
    }

    if(form.category == 'C2' && form.rateableValue * form.rate < 250){
        c2 = 250
    }else{
        c2 = form.rateableValue * form.rate
    }

    if(form.category == 'C3' && form.rateableValue * form.rate < 200){
        c3 = 200
    }else{
        c3 = form.rateableValue * form.rate
    }

    if(form.category == 'R1' && form.rateableValue * form.rate < 150){
        r1 = 300
    }else{
        r1 = form.rateableValue * form.rate
    }

    if(form.category == 'R2' && form.rateableValue * form.rate < 100){
        r2 = 100
    }else{
        r2 = form.rateableValue * form.rate
    }

    if(form.category == 'R3' && form.rateableValue * form.rate < 50){
        r3 = 50
    }else{
        r3 = form.rateableValue * form.rate
    }

    if(form.category == 'R4' && form.rateableValue * form.rate < 20){
        r4 = 20
    }else{
        r4 = form.rateableValue * form.rate
    }

    if(form.category == 'HI' && form.rateableValue * form.rate < 2000){
        hi = 2000
    }else{
        hi = form.rateableValue * form.rate
    }

    if(form.category == 'LI' && form.rateableValue * form.rate < 1000){
        li = 1000
    }else{
        li = form.rateableValue * form.rate
    }

    if(form.category == 'MX' && form.rateableValue * form.rate < 200){
        mx = 200
    }else{
        mx = form.rateableValue * form.rate
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
                <div className='text-input'><input type="text" name='company' value={company} onChange={(e) => setCompany(e.target.value)} placeholder='Valuation' /></div>
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
                <div className='text-input'><input type="text" name='arrears' value={form.arrears_rate * form.rateableValue} onChange={onUpdateForm} placeholder='Arrears' /></div>
                {form.category == "C1" && <div className='text-input'><input type="text" value={c1} placeholder='Bill Amount' /></div>}
                {form.category == "C2" && <div className='text-input'><input type="text" value={c2} placeholder='Bill Amount' /></div>}
                {form.category == "C3" && <div className='text-input'><input type="text" value={c3} placeholder='Bill Amount' /></div>}
                {form.category == "R1" && <div className='text-input'><input type="text" value={r1} placeholder='Bill Amount' /></div>}
                {form.category == "R2" && <div className='text-input'><input type="text" value={r2} placeholder='Bill Amount' /></div>}
                {form.category == "R3" && <div className='text-input'><input type="text" value={r3} placeholder='Bill Amount' /></div>}
                {form.category == "R4" && <div className='text-input'><input type="text" value={r4} placeholder='Bill Amount' /></div>}
                {form.category == "LI" && <div className='text-input'><input type="text" value={li} placeholder='Bill Amount' /></div>}
                {form.category == "HI" && <div className='text-input'><input type="text" value={hi} placeholder='Bill Amount' /></div>}
                {form.category == "MX" && <div className='text-input'><input type="text" value={mx} placeholder='Bill Amount' /></div>}
                <div className='add-button' onClick={submit}>Add Property</div>
            </div>
        </div>
    )
}
