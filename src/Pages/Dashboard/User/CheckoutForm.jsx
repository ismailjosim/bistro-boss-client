import { useState } from 'react';
import { VscError } from 'react-icons/vsc'

import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';


const CheckoutForm = () => {
    const [cardError, setCardError] = useState(null)
    const stripe = useStripe();
    const elements = useElements();


    const handleSubmit = async (e) => {
        e.preventDefault();
        setCardError(null)

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('Error found', error);
            setCardError(error.message)
        } else {
            console.log("payment details:", paymentMethod);

        }



    }



    return (
        <>
            <form onSubmit={ handleSubmit }>
                <div className="mt-5">
                    <CardElement
                        options={ {
                            style: {
                                base: {
                                    fontSize: '16px',
                                    color: '#424770',
                                    '::placeholder': {
                                        color: '#aab7c4',
                                    },
                                },
                                invalid: {
                                    color: '#9e2146',
                                },
                            },
                        } }
                        className="px-2 py-5 border border-primary rounded-md"
                    />
                </div>
                <div className='flex justify-end mt-5'>
                    <button className='btn btn-primary btn-sm text-white' type="submit" disabled={ !stripe }>
                        Proceed To Payment
                    </button>
                </div>
            </form>
            { cardError && <div className="alert alert-error text-white font-semibold mt-5">
                <VscError />
                <span>{ cardError }</span>
            </div> }
        </>
    );
};

export default CheckoutForm;
