import React, {useState, useEffect} from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';
import { commerce }  from "../../../lib/commerce"
import { Stepper, Step, StepLabel, Button, CircularProgress, InputLabel, MenuItem} from '@mui/material'
import FormInput from '../CustomText'
import { Link } from 'react-router-dom'

const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  Email: yup.string().email().required(),
  address: yup.string().email().required(),
  city: yup.string().email().required(),
  Zipcode: yup.string().required(),
});

const AddressForm = ({ checkoutToken }) => {
  const [shippingCountries, setShippingCountries] = useState([])
  const [shippingCountry, setShippingCountry] = useState('')
  const [shippingSubdivisons, setShippingSubdivisons] = useState([])
  const [shippingSubdivison, setShippingSubdivison] = useState('')
  const [shippingOptions, setShippingOptions] = useState([])
  const [shippingOption, setShippingOption] = useState('')

    const countries = Object.entries(shippingCountries).map(([code, name]) => ({ id: code, label: name }))// this is used to change the shipping countries from an array to an object by destructing it and naming it 
   // object.entries muSt be used to get the country code in order to be able to easily map over it because it is not a usual array
   const subdivisions = Object.entries(shippingSubdivisons).map(([code, name]) => ({ id: code, label: name }))
   // shipping option is an array not an object so muct be mapped directly
   const options = shippingOptions.map((shipOption) =>({id: shipOption.id, label: `${shipOption.description} - (${shipOption.price.formatted_with_symbol})`}))
   console.log(options)
   const { register, handleSubmit, formState: {errors} } = useForm({
    resolver: yupResolver(schema),
  });
  const submitForm = (data) => {

  }
  const fetchShippingCountries = async (checkoutTokenId) =>{
    const { countries } = await commerce.services.localeListShippingCountries(checkoutTokenId)

    setShippingCountries(countries);
    setShippingCountry(Object.keys(countries)[0])
  }

  const fetchSubdivisions = async (countryCode) => 
  {
    const { subdivisions } = await commerce.services.localeListSubdivisions(countryCode)

    console.log(subdivisions)
    setShippingSubdivisons(subdivisions)
    setShippingSubdivison(Object.key(subdivisions)[0])
  }

  const fetchShippingOptions = async (checkoutTokenId, country, region = null) => {
    const options = await commerce.checkout.getShippingOptions(checkoutTokenId, { country, region })

    setShippingOptions(options);
    setShippingOption(options[0].id)
  }


  useEffect(() => {
    fetchShippingCountries(checkoutToken.id)
  }, [])


  useEffect(() => {
    if(shippingCountry) fetchSubdivisions(shippingCountry)
  }, [shippingCountry]);

    useEffect(() => {
      if(shippingSubdivison) fetchShippingOptions(checkoutToken.id, shippingCountry, shippingSubdivison);
    }, [shippingSubdivison])

  return (
    <>
        <h4 className='pt-5'>Shipping Address</h4>
    <form onSubmit={handleSubmit(submitForm)}>
  <div className="row">
      <div className='col'>
      <label for="First name" class="form-label">First Name</label>
      <input type ="text" className="form-control"  placeholder='first Name' {...register("firstName")} />
      </div>
      <div  className='col'>
      <label for="lastname" class="form-label">Last Name</label>
      <input type ="text" className="form-control"  placeholder='Last Name' {...register("lastName")} />
      </div>
    </div>
    <div className='row'>
      <div className='col'>
      <label for="email" class="form-label">Email</label>
      <input type ="text" className="form-control"  placeholder='Email' {...register("Email")} />
      </div>

      <div className='col'>
      <label for="email" class="form-label">ZipCode</label>
      <input type ="text" className="form-control" placeholder='Zip code' {...register("Zipcode")} />
      </div> 
    </div>

    <div className='row'>
      <div className='col'>
      <label for="email" class="form-label">City</label>
      <input type ="text" className='form-control'  placeholder='City' {...register("city")} />
      </div>
      
      <div className='col'>
      <label for="email" class="form-label">Address</label>
      <input type ="text" className="form-control"  placeholder='Address' {...register("address")} />
      </div>
    </div>  

    <div>
      <label>Shipping Country</label>
      <select  className="form-select" onChange={(e) => setShippingCountry(e.target.value)} value={shippingCountry}>
        {countries.map((country) => (
        <option key={country.id} value={country.id}>
            {country.label}
        </option>
        ))}
      </select>
    </div>


    <div>
      <label>Shipping Sub-divisions</label>
      <select  className="form-select" onChange={(e) => setShippingSubdivison(e.target.value)} value={shippingSubdivison}>
        {subdivisions.map((subdivision) => (
        <option key={subdivision.id} value={subdivision.id}>
            {subdivision.label}
        </option>
        ))}
      </select>
    </div>


    <div>
      <label>Shipping Options</label>
      <select  className="form-select" onChange={(e) => setShippingOption(e.target.value)} value={shippingOption}>
        {options.map((option) => (
        <option key={option.id} value={option.id}>
            {option.label}
        </option>
        ))}
      </select>
    </div>

    <div className='text-center row  align-items-center m-5 justify-content-center'>
      <div className='col'>
      <Link to ='/cart' className='text-decoration-none'>
      <Button variant="outlined" color='primary'  > Back to cart</Button>
      </Link>
      </div>
    
      <div className='col'>
      <Button variant="contained"> Next</Button>
      </div>
       
    </div>
    </form> 
    </>
  )
}

export default AddressForm