import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import useCart from '../../../Hooks/useCart';

const stripePromise = loadStripe(`${ process.env.REACT_APP_Stripe_Key }`);

const Payment = () => {
    const { cart } = useCart();
    const total = cart.reduce((sum, item) => item.price + sum, 0);
    const price = parseInt(total.toFixed(2))




    return (
        <section className='w-11/12 mx-auto min-h-[85vh] flex justify-center items-center'>
            <div>
                <h3 className='text-4xl font-semibold capitalize text-center'>Proceed to Payment</h3>
                <Elements stripe={ stripePromise }>
                    <CheckoutForm price={ price } cart={ cart } />
                </Elements>









            </div>
        </section >
    )
};

export default Payment;
