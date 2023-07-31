import { useState } from 'react';

import './donations.css'
function Payment({subtotal}){
    const [mpesaDisplay, setMpesaDisplay] = useState(true)
    const cardNumberInput = document.getElementById('cardNumber');
    cardNumberInput?.addEventListener('input', function() {
    let cardNumber = this.value.replace(/\s/g, '');
    let formattedCardNumber = '';
    for (let i = 0; i < cardNumber.length; i++) {
        formattedCardNumber += cardNumber.charAt(i);
        if ((i + 1) % 4 === 0 && i !== cardNumber.length - 1) {
        formattedCardNumber += ' ';
        }
    }
    this.value = formattedCardNumber;
    });
    const mpesaStyle={
        display: mpesaDisplay===true?'block':'none'
    }
    const visaStyle={
        display: mpesaDisplay===true?'none':'block'
    }
    return(
        <div className='payment-page'>
        <div className="payment-wrapper">
            <div
 className="checkout-wrap-header" style={{width:
window.screen.width<600?`${window.screen.width - 50}px`:"auto"}}>
                <h1>Checkout</h1>
                <div className="checkout-links">
                    <div className="checkout-link">
                        <i class="las la-check check check-bg"></i>
                        <a href="/cart">Cart</a>
                    </div>
                    <div className="line"></div>
                    <div className="checkout-link">
                        <i class="las la-check check check-bg"></i>
                        <a href="/checkout">Checkout</a>
                    </div>
                    <div className="checkout-link">
                        <i class="las la-check check"></i>
                        <a href="#">Payment</a>
                    </div>
                </div>
            </div>
            <div className='checkout-summary'>
                <div className='contact-summary'>
                    <div>
                        <h5>Contact Information</h5>
                        <p></p>
                    </div>
                    <a href='/checkout'>Edit</a>
                </div>
                <div className='shipping-summary'>
                    <div>
                        <h5>Shipping Information</h5>
                        <p>Enter Address</p>
                    </div>
                    <a href='/billing'>Edit</a>
                </div>
                <div className='order-summary'>
                    <div>
                        <h5>Order Information</h5>
                        <p>Subtotal: Ksh. {subtotal}</p>
                        <p>Delivery fees: Ksh. 500</p>
                        <p>TOTAL: Ksh. {subtotal+500}</p>
                    </div>
                    <a href='/cart'>Edit</a>
                </div>
            </div>
            <div className='payment-form-wrap'>
                <h2>Payment Information</h2>
                <div className='payment-form'>
                    <button
 className='payment-continue-btn paypal btn-primary'><i class='bx
bxl-paypal' ></i> Paypal</button>
                    <button
 className='payment-continue-btn mpesa btn-success'
onClick={e=>setMpesaDisplay(true)}>Mpesa</button>
                    <button
 className='payment-continue-btn visa btn-primary'
onClick={e=>setMpesaDisplay(false)}><i class='bx
bxl-visa'></i></button>
                </div>
                <div className='mpesa-form' style={mpesaStyle}>
                    <input type='text' name='mpesa' placeholder='Enter your Mpesa number'/>
                </div>
                <div className='visa-form' style={visaStyle}>
                    <input type='text' maxlength="19" name='visa' id='cardNumber' placeholder='Card number' required/>
                    <input
 type='text' id='expirationDate' maxlength="7" placeholder='Expiration
Date (MM/YYYY)' required/>
                    <input type='number' id='half' max="3" placeholder='CVV' required/>
                </div>
                <button className='submit-payment-btn'>Continue</button>
            </div>
        </div>
        <div className='order-summary'></div>
        </div>
    )
}
export default Payment;