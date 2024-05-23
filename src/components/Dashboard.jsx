import React, { useState } from 'react'
import { AddCompany } from './AddCompany'
import { AddProperty } from './AddProperty';
import { Bill } from './Bill';
import { EditArrears } from './EditArrears';
import { AddIndividual } from './AddIndividual';

export const Dashboard = () => {
  const [company, setCompany] = useState(false);
  const [property, setProperty] = useState(false);
  const [arrears, setArrears] = useState(false);
  const [bill, setBill] = useState(false);

  const companyClick = () => {
    setCompany(true)
    setProperty(false)
    setArrears(false)
    setBill(false)
  }

  const propertyClick = () => {
    setCompany(false)
    setProperty(true)
    setArrears(false)
    setBill(false)
  }

  const arrearsClick = () => {
    setCompany(false)
    setProperty(false)
    setArrears(true)
    setBill(false)
  }

  const billClick = () => {
    setCompany(false)
    setProperty(false)
    setArrears(false)
    setBill(true)
  }

  return (
    <div className='dash-container'>
      <div className='dash-wrapper'>
        <div className='nav-wrapper'>
          <div className='nav-card-1' onClick={companyClick}>Add Organization</div>
          <div className='nav-card-1' onClick={propertyClick}>Add Property</div>
          {/* <div className='nav-card-2' onClick={arrearsClick}>Edit Arrears</div> */}
          <div className='nav-card-3' onClick={billClick}>Bill</div>
        </div>
        <div className='dash-details'>
          {company && <AddCompany />}
          {property && <AddProperty />}
          {arrears && <EditArrears />}
          {bill && <Bill />}
        </div>
      </div>
    </div>
  )
}
