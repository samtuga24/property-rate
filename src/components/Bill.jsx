import React, { useEffect, useRef, useState } from 'react'
import coat from '../image/coat.png'
import phma from '../image/phma-logo.png'
import sign from '../image/sign.png'
import ReactToPrint from 'react-to-print'
import axios from 'axios'

export const Bill = () => {
    const [comp, setComp] = useState();
    const [tin, setTin] = useState()
    const [bill, setBill] = useState()
    const [company, setCompany] = useState()
    const [type, setType] = useState()
    const [phone, setPhone] = useState()
    const [alias, setAlias] = useState()
    const [aliasLength, setAliasLength] = useState()
    const [arrears, setArrears] = useState()
    const [total, setTotal] = useState()
    const [hide, setHide] = useState(true)
    const [show, setShow] = useState(false)
    const [owner, setOwner] = useState()
    const [ex, setEx] = useState();

    const clickBill = () => {
        setHide(false)
        setShow(true)

        axios.get(`http://localhost:8080/get-property/${tin}`)
            .then(response => {
                console.log(response.data[0])
                console.log(response.data[0].company)
                console.log(response.data[0].company.id)
                setComp(response.data[0].company.id)
                setCompany(response.data[0].company.name)
                setOwner(response.data[0].company.owner)
                setPhone(response.data[0].company.phone)
                setArrears(response.data[0].company.arrears)
                setAlias(response.data[0].company.alias)
                setAliasLength(response.data[0].company.alias.length)
                setType(response.data[0].company.type)
            })
            .catch((error) => console.log(error))
    }

    useEffect(()=>{
        axios.get(`http://localhost:8080/get-total/${comp}`)
        .then(response => { setTotal(response.data.reduce((num1, num2) => num1 + num2, 0)) })
        .catch((error) => console.log(error))


    axios.get(`http://localhost:8080/list-property/${comp}`)

        .then(response => { setEx(response.data) })
        .catch((error) => console.log(error))
    },[comp])




    const currentDate = new Date().toString().slice(0, 15);
    console.log(`http://localhost:8080/list-property/${comp}`)
    console.log(comp)
    console.log(bill)
    console.log(ex)
    console.log(total)
    console.log(company)
    console.log(aliasLength)
    const [expand, setExpand] = useState(false);
    const myRef = useRef();
    const clickExpand = () => {
        setExpand(!expand)
    }

    return (
        <div>
            {hide &&
                <div className='add-company-container'>
                    <div className='add-company-wrapper'>
                        <div className='text-input'><input type="text" name='company' value={tin} onChange={(e) => setTin(e.target.value)} placeholder='Valuation Number' /></div>
                        <div className='bill-button' onClick={clickBill}>Get Bill</div>
                    </div>
                </div>
            }
            {show &&
                <div className='print-container'>
                    <div className='print-button'>
                        <div className='expand' onClick={clickExpand}>Expand</div>
                        <ReactToPrint
                            trigger={() => <div className='print'>Print</div>}
                            pageStyle="pageStyle"
                            content={() => myRef.current}
                            documentTitle='Property Rate Bill'
                        />

                    </div>
                    <div className='print-wrapper' ref={myRef}>
                        <div className='print-header'>
                            <div className='bill-header'>PRESTEA-HUNI VALLEY MUNICIPAL ASSEMBLY</div>
                            <div className='logo-header'>
                                <div className='coat-wrapper'><img src={coat} alt="" /></div>
                                <div className='header-wrapper'>

                                    <div className='bill-header-1'>P.O BOX 26, BOGOSO, W/R, GHANA</div>
                                    <div className='header-contact'>Tel: 0244783695, 0243345726</div>
                                </div>
                                <div className='phma-wrapper'><img src={phma} alt="" /></div>
                            </div>
                            <div className='reference-wrap'>
                                <div className='reference'>
                                    <div className='my-ref'><i>Our Ref.</i></div>
                                    <div className='your-ref'><i>Your Ref No: .....................................</i></div>
                                </div>
                                <div className='bill-time'>{currentDate}</div>
                            </div>
                        </div>


                        <div className='print-details'>
                            <div className='attn'> ATTN:  {type == 'ORGANIZATION' ? owner : company}</div>
                            <div className='rate-header'>PAYMENT OF PROPERTY RATE</div>
                            <div className='law-section'>
                                Section 12 (3) (a), 144, 145 of the Local Government Act 2016 (Act 936) charges the District<br />
                                Assemblies with the responsibility for the overall development of their districts. In accordance with<br />
                                Section 146 2 (a) (b) of the Local Government Act, 2016 (Act 936), I write to inform you that your<br />
                                property rate bills are ready online.<br />
                                You are required to pay the amount stated below;
                            </div>
                            
                                <div className='row-detail'>
                                    <div className='detail-label'>{type == 'INDIVIDUAL' ? 'Full Name' : 'Company Name'}</div>
                                    <div className='detail'>{aliasLength > 0 ? alias : company}</div>
                                </div>
                                <div className='row-detail'>
                                    <div className='detail-label'>Property Value</div>
                                    <div className='detail'>{phone}</div>
                                </div>
                                <div className='row-detail'>
                                    <div className='detail-label'>Arrears</div>
                                    <div className='detail'>GHS {arrears}</div>
                                </div>

                                <div className='row-detail'>
                                    <div className='detail-label'>Current Bill:</div>
                                    <div className='detail'>GHS {Math.round(total *100)/100}</div>
                                </div>

                                <div className='row-detail'>
                                    <div className='detail-label'>Total Bill:</div>
                                    <div className='detail'>GHS {Math.round((arrears + total) *100)/100}</div>
                                </div>
                            
                            {type == 'ORGANIZATION' ?
                                <div className='babk-details'>
                                    <p>You are required to pay via direct bank transfer or cheque to the account provided below;</p>
                                        <div className='row-detail'>
                                            <div className='detail-label'>Account Name</div>
                                            <div className='detail'>PHDA Internally Gen</div>
                                        </div>
                                        <div className='row-detail'>
                                            <div className='detail-label'>Account Number</div>
                                            <div className='detail'>4141130000019</div>
                                        </div>

                                        <div className='row-detail'>
                                            <div className='detail-label'>Bank</div>
                                            <div className='detail'>GCB Plc. </div>
                                        </div>

                                        <div className='row-detail'>
                                            <div className='detail-label'>Branch Code</div>
                                            <div className='detail'>GHCBGHAC</div>
                                        </div>
                                </div> : null
                            }
                        </div>

                        {expand &&
                            <div className='detail-table'>
                                <table className='d-table'>
                                    <tr>
                                        <th>Property</th>
                                        <th>Category</th>
                                        {/* <th>Bill ID</th> */}
                                        {/* <th>Valuation Status</th> */}
                                        <th>Rateable Value (GHS)</th>
                                        <th>Rate</th>
                                        {/* <th>Amount Due (GHS)</th> */}
                                        <th>Bill Amount (GHS)</th>
                                    </tr>
                                    {ex.map((items, i) => {
                                        return (
                                            <tr>
                                                <td className='print-table'>{items.propertyId}</td>
                                                <td className='print-table'>{items.category}</td>
                                                {/* <td className='print-table'></td> */}
                                                {/* <td></td> */}
                                                <td className='rate'>{items.rateableValue}</td>
                                                <td className='rate'>{items.rate}</td>
                                                {/* <td></td> */}
                                                <td className='rate'>{items.billAmount}</td>
                                            </tr>
                                        )
                                    })}
                                </table>
                            </div>
                        }
                        <div className='foot-note'>
                            <i>***</i><br /><i>Kindly note that you have forty-two(42) days upon receipt of this letter to make full payment.
                                The Assembly will follow the due process to recover payment due after the deadline has elapsed.<br />
                                If you require any assistance, kindly contact the following scheduled Officers.</i><br />
                            <div className='officers-list'>
                                1. Mr. Emmauel Gyan, Municipal Coordinating Director - 0243345726<br />
                                2. Mr. Thomas Asare, Municipal Head Of Finance - 0242613441<br />
                                3. Mr. Stephen K. Dankwah, Municipal Budget Analyst - 0242236691<br />
                                4. Mr. Alhassan Modi, Revenue Head - 0243619310<br />
                                5. Mr. Peter Sellasie Adjorlolo, Service Manager - 0507617267 / 0530186801<br />
                                We count on your usual cooperation<br />
                                Thank you.
                            </div>
                            <div className='director-container'>
                                <div className='director-wrapper'>
                                    <div className='director-name'>Mr. Emmanuel Gyan</div>
                                    <div className='director-sign'><img src={sign} alt="" /></div>
                                    <div className='director-position'>Municipal Coordinating Director</div>
                                </div>
                            </div>
                            <i>***</i>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}
