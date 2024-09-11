/* eslint-disable react/prop-types */
import React from 'react'

function Pagination({ productsPerge,totaLproducts,paginate, activePoge}) {
    const pageNumbers = [];
    for(let i = 1; i <= Math.ceil(totaLproducts / productsPerge) ;i++) {
        pageNumbers.push(i)
    }
  return (
    <ul className='default-pagination lab-ul'>
        <li>
            <a href="#" onClick={() => {
                if(activePoge < pageNumbers.length) {
                    paginate(activePoge - 1)
                }
            }}>
                <i className='icofont-rounded-left'></i>
            </a>
        </li>
        {
           pageNumbers.map((number) => (
            <li key={number} className={`page-item ${number === activePoge ? "bg-warning" : ""}`}>
                <button onClick={()=> paginate(number)} className='bg-transparent' >{number}</button>
            </li>
           ))
        }  
         <li>
            <a href="#" onClick={() => {
                if(activePoge < pageNumbers.length) {
                    paginate(activePoge + 1)
                }
            }}>
                <i className='icofont-rounded-right'></i>
            </a>
        </li>
    </ul>
  )
}

export default Pagination