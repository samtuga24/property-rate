import React, { useRef, useState } from 'react'
import coat from '../image/coat.png'
import phma from '../image/phma-logo.png'
import ReactToPrint from 'react-to-print'
export const Print = () => {
    const [expand, setExpand] = useState(false);
    const myRef = useRef();
    const clickExpand = () => {
        setExpand(!expand)
    }
    return (
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
                    <div className='coat-wrapper'><img src={coat} alt="" /></div>
                    <div className='header-wrapper'>
                        <div className='bill-header'>Consolidated Bill</div>
                        <div className='bill-header-1'>Phma - Property Rate Bill</div>
                    </div>
                    <div className='phma-wrapper'><img src={phma} alt="" /></div>
                </div>
                <div className='print-details'>
                    <div className='detail-label'>Company Name:</div>
                    <div className='detail'>GENSER ENERGY GHANA LIMITED</div>

                    <div className='detail-label'>Contact:</div>
                    <div className='detail'>+233(0)244444444</div>

                    <div className='detail-label'>Arrears:</div>
                    <div className='detail'>GH 100.00</div>

                    <div className='detail-label'>Total Bill:</div>
                    <div className='detail'>GH 200.00</div>
                </div>

                {expand &&
                    <div className='detail-table'>
                        <table className='d-table'>
                            <tr>
                                <th>Property</th>
                                <th>Category</th>
                                <th>Bill ID</th>
                                <th>Valuation Status</th>
                                <th>Rateable Value (GHS)</th>
                                <th>Rate</th>
                                <th>Amount Due (GHS)</th>
                                <th>Bill Amount (GHS)</th>
                            </tr>

                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </table>
                    </div>
                }
                <div className='foot-note'>
                    <i>***</i><br /><i>Kindly note that you have forty-two(42) days upon receipt of this letter to make full payment.
                        The Assembly will follow the due process to recover payment due after the deadline has elapsed.
                        If you require any assistance, kindly contact the following scheduled Officers.</i><br />
                    <div className='officers-list'>
                        1. Mr. Emmauel Gyan, Municipal Coordinating Director - 0243345726<br />
                        2. Mr. Thomas Asare, Municipal Head Of Finance - 0242613441<br />
                        3. Mr. Stephen K. Dankwah, Municipal Budget Analyst - 0242236691<br />
                        4. Mr. Alhassan Modi, Revenue Head - 0243619310<br />
                        5. Mr. Peter Sellasi Adjorlolo, Service Manager - 0507617267<br />
                    </div>
                    <i>***</i>
                </div>
            </div>
        </div>
    )
}
