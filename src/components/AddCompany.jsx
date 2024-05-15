import axios from 'axios';
import React, { useState } from 'react'

export const AddCompany = () => {
  const [result, setResult] = useState()
  let organization
  let individual
  const [form, submitForm] = useState({
    name: "",
    tin: "",
    phone: "",
    arrears: "",
    type: "",
    alias: "",
    owner: ""
  })

  const onUpdateForm = e => {
    const newFormState = {
      ...form,
      [e.target.name]: e.target.value.toUpperCase()
    };
    submitForm(newFormState)
  }

  if (form.type == 'ORGANIZATION') {
    organization = true
    individual = false
  } else if (form.type == 'INDIVIDUAL') {
    organization = false
    individual = true
  }
  console.log(organization)
  console.log(individual)

  const submit = () => {
    axios.post('http://localhost:8080/add-company', form)
      .then(response => {
        setResult(response.data)
      })
      .catch((error) => console.log(error))
    submitForm({
      name: "",
      tin: "",
      phone: "",
      arrears: "",
      type: "",
      alias: "",
      owner: ""
    })

  }



  console.log(result)
  return (
    <div className='add-company-container'>
      <div className='add-company-wrapper'>
        <div className='result'>{result}</div>
        <select name="type" value={form.type} onChange={onUpdateForm} id="" className='category-select'>
          <option value="" disabled={true}>Category</option>
          <option value="ORGANIZATION">Organization</option>
          <option value="INDIVIDUAL">Individual</option>
        </select>
      </div>
      {organization &&
        <div className='add-company-wrapper'>
          <div className='text-input'><input type="text" name='name' value={form.name} onChange={onUpdateForm} placeholder='Company Name' /></div>
          <div className='text-input'><input type="text" name='owner' value={form.owner} onChange={onUpdateForm} placeholder='Owners Name' /></div>
          <div className='text-input'><input type="text" name='tin' value={form.tin} onChange={onUpdateForm} placeholder='TIN' /></div>
          <div className='text-input'><input type="text" name='phone' value={form.phone} onChange={onUpdateForm} placeholder='Phone' /></div>
          <div className='text-input'><input type="text" name='arrears' value={form.arrears} onChange={onUpdateForm} placeholder='Arrears' /></div>
          <div className='add-button' onClick={submit}>Add Organization</div>
        </div>
      }

      {individual &&
        <div className='add-company-wrapper'>
          <div className='text-input'><input type="text" name='name' value={form.name} onChange={onUpdateForm} placeholder='Full Name' /></div>
          <div className='text-input'><input type="text" name='tin' value={form.tin} onChange={onUpdateForm} placeholder='Ghana Card Number' /></div>
          <div className='text-input'><input type="text" name='phone' value={form.phone} onChange={onUpdateForm} placeholder='Phone' /></div>
          <div className='text-input'><input type="text" name='arrears' value={form.arrears} onChange={onUpdateForm} placeholder='Arrears' /></div>
          <div className='text-input'><input type="text" name='alias' value={form.alias} onChange={onUpdateForm} placeholder='Alias' /></div>

          <div className='add-button' onClick={submit}>Add Individual</div>
        </div>
      }
    </div>
  )
}
