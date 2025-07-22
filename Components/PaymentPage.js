import React from 'react'

const PaymentPage = () => {
    return (
        <>

            <body>
                <form action="https://rc-epay.esewa.com.np/api/epay/main/v2/form" method="POST">
                    <input type="hidden" id="amount" name="amount" value="100" required />
                    <input type="hidden" id="tax_amount" name="tax_amount" value="10" required />
                    <input type="hidden" id="total_amount" name="total_amount" value="110" required />
                    <input type="hidden" id="transaction_uuid" name="transaction_uuid" value="241028" required />
                    <input type="hidden" id="product_code" name="product_code" value="EPAYTEST" required />
                    <input type="hidden" id="product_service_charge" name="product_service_charge" value="0" required />
                    <input type="hidden" id="product_delivery_charge" name="product_delivery_charge" value="0" required />
                    <input type="hidden" id="success_url" name="success_url" value="https://developer.esewa.com.np/success" required />
                    <input type="hidden" id="failure_url" name="failure_url" value="https://developer.esewa.com.np/failure" required />
                    <input type="hidden" id="signed_field_names" name="signed_field_names" value="total_amount,transaction_uuid,product_code" required />
                    <input type="hidden" id="signature" name="signature" value="i94zsd3oXF6ZsSr/kGqT4sSzYQzjj1W/waxjWyRwaME=" required />
                    <input value="Submit" type="submit" />
                </form>
            </body>



        </>
    )
}

export default PaymentPage
