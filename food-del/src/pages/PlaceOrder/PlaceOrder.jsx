import React, { useContext, useEffect, useState } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../Context/StoreContext'
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';

const PlaceOrder = () => {

    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: ""
    })

    const { getTotalCartAmount, placeOrder } = useContext(StoreContext);

    const navigate = useNavigate();

    const onChangeHandler = (event) => {
        const name = event.target.name
        const value = event.target.value
        setData(data => ({ ...data, [name]: value }))
    }

    useEffect(() => {
        if (getTotalCartAmount() === 0) {
            navigate('/')
        }
    }, [])

    return (
        <div>
        <div className='place-order'>
            <div className="place-order-left">
                <p className='title'>Personal Information</p>
                <div className="multi-field">
                    <input type="text" className='firstName' onChange={onChangeHandler} value={data.firstName} placeholder='First name' />
                    <input type="text" className='lastName' onChange={onChangeHandler} value={data.lastName} placeholder='Last name' />
                </div>
                <input type="email" className='email' onChange={onChangeHandler} value={data.email} placeholder='Email address' />
                <input type="text" className='phone' onChange={onChangeHandler} value={data.phone} placeholder='Phone' />
                </div>
                
               
            </div>
            <div className="place-order-right">
                <div className="cart-total">
                    <h2>Cart Totals</h2>
                    <div>
                        <hr />
                        <div className="cart-total-details"><b>Total</b><b>₹{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount()}</b></div>
                    </div>
                </div>
                <div className="payment-options">
                    <button onClick={() => placeOrder(data)}>PLACE ORDER</button>
                </div>

            </div>
        </div>
    )
}

export default PlaceOrder
