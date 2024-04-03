import React from 'react'

export const AddIndividual = () => {
    return (
        <div className='add-company-container'>
            <div className='add-company-wrapper'>
                <div className='result'></div>
                <div className='text-input'><input type="text" name='name' placeholder='Full Name' /></div>
                <div className='text-input'><input type="text" name='tin'placeholder='Ghana Card Number' /></div>
                <div className='text-input'><input type="text" name='phone' placeholder='Phone' /></div>
                <div className='text-input'><input type="text" name='arrears' placeholder='Alias' /></div>
                <div className='add-button'>Add Individual</div>
            </div>
        </div>
    )
}
