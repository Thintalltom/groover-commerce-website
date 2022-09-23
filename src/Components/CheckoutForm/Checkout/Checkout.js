import React, {useState, useEffect} from 'react'
import { Stepper, Step, StepLabel, Button, CircularProgress, InputLabel} from '@mui/material'
import "./checkout.css"
import AddressForm from './AddressForm'
import PaymentForm from './PaymentForm'
import { commerce } from "../../../lib/commerce"

const steps = ['Shipping Address', 'Payment Detail']
const Checkout = ({ cart }) => {
    const [activeStep, setActiveStep] = useState(0)
    const [checkoutToken, setCheckoutToken] = useState(null);// it is going to be set to null by default 

    useEffect(() => {
        const generateToken =  async () => {
            try{
                    const token = await commerce.checkout.generateToken(cart.id, { type: 'cart'})
                
                console.log(token)
                setCheckoutToken(token)
                }catch (error){

            }
        }
        // in useEffcet you cannot use async unless you have  a new function
        generateToken();
    }, [cart]);
    const Form = () => activeStep === 0 ? <AddressForm checkoutToken={checkoutToken} /> : <PaymentForm />

const Confirmation = () =>
{
    <div>
        hello
    </div>
}

    
  return (
    <div className='container pt-5'>
        <h4 className='text-center'>Checkout</h4>
        <Stepper activeStep={activeStep}>
            {steps.map((step) => (
                <Step key={step}>
                    <StepLabel>{step}</StepLabel>
                    
                </Step>
            ))}
        </Stepper>
        {activeStep === steps.length ? <Confirmation /> :checkoutToken && <Form /> }
    </div>
  )
}

export default Checkout