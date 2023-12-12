import React, { Fragment, useState } from 'react';
import './Order.css';
import OrderCard from './OrderCard';
import { useSelector } from 'react-redux';



const Order = () => {

  const { orderItems } = useSelector((state) => state.order);

  return (
    <Fragment>
      <div className='orderContainer'>
        <div className="orderlistdiv">
          <div className="orderlist_heading">
            <h3>All Orders</h3>
            <p>Actions</p>
          </div>
          <div className="orderlist_data">
            {
              orderItems && orderItems.map((item) => (
                <OrderCard key={item.orderId} item={item} />
              ))
            }
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Order
