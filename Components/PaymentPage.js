import React from 'react'
import CryptoJS from 'crypto-js'
import { v4 as uuidv4 } from 'uuid';

const PaymentPage = () => {

    const uuid = uuidv4();
    const totalAmount = 50
    const message = `total_amount = {totalAmount}, transaction_uuid = { uuid }, product_code = EPAYTEST`;
    const secret = "8gBm/:&EnhH.1/q"
    var hash = CryptoJS.HmacSHA256(message, secret);
    var hashInBase64 = CryptoJS.enc.Base64.stringify(hash);
    // document.write(hashInBase64);
    console.log(uuid)

    return (
        <>

            <body>
                <form action="https://rc-epay.esewa.com.np/api/epay/main/v2/form" method="POST">
                    <input type="hidden" id="amount" name="amount" value={totalAmount} required />
                    <input type="hidden" id="tax_amount" name="tax_amount" value="10" required />
                    <input type="hidden" id="total_amount" name="total_amount" value={totalAmount} required />
                    <input type="hidden" id="transaction_uuid" name="transaction_uuid" value={uuid} required />
                    <input type="hidden" id="product_code" name="product_code" value="EPAYTEST" required />
                    <input type="hidden" id="product_service_charge" name="product_service_charge" value="0" required />
                    <input type="hidden" id="product_delivery_charge" name="product_delivery_charge" value="0" required />
                    <input type="hidden" id="success_url" name="success_url" value="https://developer.esewa.com.np/success" required />
                    <input type="hidden" id="failure_url" name="failure_url" value="https://developer.esewa.com.np/failure" required />
                    <input type="hidden" id="signed_field_names" name="signed_field_names" value="total_amount,transaction_uuid,product_code" required />
                    <input type="hidden" id="signature" name="signature" value={hash} required />
                    <input value="Submit" type="submit" />
                </form>
            </body>



        </>
    )
}

export default PaymentPage
