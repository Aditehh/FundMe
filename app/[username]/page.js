"use client"
import React, { useEffect } from 'react'
import Link from 'next/link'
import CryptoJS from 'crypto-js';
import { v4 as uuidv4 } from 'uuid';
import { useState, useRef } from 'react';
import { useSession } from 'next-auth/react';
import PaymentPage from '@/Components/PaymentPage';
import Script from 'next/script';


const Username = (params) => {
  const productCode = "EPAYTEST";


  const [totalAmount, setTotalAmount] = useState("");
  // const [transactionUUID, setTransactionUUID] = useState("");
  // const [productCode, setProductCode] = useState("EPAYTEST");
  const [signature, setSignature] = useState("");

  const [paymentform, setpaymentform] = useState({ name: "", message: "", amount: "" })

  const transactionUUID = uuidv4();

  useEffect(() => {
    if (!totalAmount || !transactionUUID || !productCode) return;

    const secret = "YOUR_SECRET_KEY"; // Replace with your actual secret key
    const message = `total_amount=${totalAmount},transaction_uuid=${transactionUUID},product_code=${productCode}`;
    const hash = CryptoJS.HmacSHA256(message, secret);
    const hashBase64 = CryptoJS.enc.Base64.stringify(hash);
    setSignature(hashBase64);
  }, [totalAmount, transactionUUID]);


  const handleChange = (e) => {
    setpaymentform({ ...paymentform, [e.target.name]: e.target.value })
  }


  return (
    <>
      <div className='cover w-full text-white' >
        <img className='relative object-cover w-full ' src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/319574/3a48afb63ec44896b29f632cbe0eec7c/eyJ3IjoxNjAwLCJ3ZSI6MX0%3D/5.jpg?token-hash=TxpINT7GexR_tz9VvM3Bh-pMPlHq1XaF47lZwjXskwc%3D&token-time=1754265600" alt="" />
        <div className='absolute right-[45%] top-96 rounded-full' >
          <img className='border-white border-2 h-[110px] w-[150px] rounded-full ' src="https://cdn-useast1.kapwing.com/static/templates/crying-cat-meme-template-full-719a53dc.webp" alt="" />
        </div>
      </div>

      <div className='flex-col text-white my-16 flex justify-center items-center gap-2'>
        <div className='font-bold text-xl'>
          {params?.email?.split("@")[0] || "Guest"}
        </div>
        <div className='text-slate-500 text-sm'>
          Creating Animated art for VTT's
        </div>
        <div className='text-slate-500 text-sm'>
          3,34,345 members . 83 posts . $12,332/release
        </div>




        <div className="PaymentsAndSupporters flex gap-4 w-[80%] mx-auto">
          {/* Supporters Section */}
          <div className="supporters bg-slate-600 p-4 rounded-lg w-1/2  overflow-y-auto">
            <h2 className="text-white font-bold mb-2">Supporters</h2>
            <ul className="text-white space-y-1 text-sm">
              <li>Messi donated a generous amount to this project</li>
              <li>Ronaldo became a top-tier supporter</li>
              <li>Neymar shared this with all his fans</li>
              <li>Marta endorsed this amazing idea</li>
              <li>Iniesta quietly became a silent donor</li>
            </ul>
          </div>


          {/* Payments Section */}

          <div className="payments bg-slate-600 p-4 rounded-lg w-1/2">
            <h2 className="text-white font-bold mb-2">Payments</h2>
            <form action="https://rc-epay.esewa.com.np/api/epay/main/v2/form" method="POST">
              <div className='flex gap-2 flex-col'>
                <div className='flex flex-col gap-2 mt-5'>
                  <div>
                    <input type="text" onChange={handleChange} value={paymentform.name} className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter the Name' />
                  </div>
                  <div>
                    <input type="text" onChange={handleChange} value={paymentform.message} className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter the Message' />
                  </div>
                  <div>
                    <input type="text" value={totalAmount} onChange={(e) => setTotalAmount(e.target.value)} name="total_amount" id="total_amount" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter the Amount' />

                  </div>


                  {/* Hidden fields */}

                  <input type="hidden" name="transaction_uuid" value={transactionUUID} required />
                  <input type="hidden" name="signed_field_names" value="total_amount,transaction_uuid,product_code" required />
                  <input type="hidden" name="signature" value={signature} required />

                  <input type="hidden" name="amount" value={totalAmount} required />
                  <input type="hidden" name="tax_amount" value="0" required />
                  <input type="hidden" name="product_service_charge" value="0" required />
                  <input type="hidden" name="product_delivery_charge" value="0" required />
                  <input type="hidden" name="success_url" value="https://developer.esewa.com.np/success" required />
                  <input type="hidden" name="failure_url" value="https://developer.esewa.com.np/failure" required />
                  <button className='w-full p-3 rounded-lg bg-slate-800'>Pay</button>
                </div>
              </div>
            </form>
          </div>

        </div>
      </div >

    </>

  )
}

export default Username
