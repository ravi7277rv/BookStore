import React from 'react';
import './PreviewOrder.css';
import { useSelector } from 'react-redux';

const PreviewOrderModal = ({ id, setPreviewModal }) => {

  const { orderItems } = useSelector((state) => state.order);

  const items = orderItems.filter((item) => item.orderId === id);

  const items1 = items[0].orderItems
  let len = items1.length;

  return (
    <div className='previewOrderBox'>
      <div className="previewHeading">
        <h3>Order Details of Order No. {id}</h3> <span onClick={() => setPreviewModal(false)}>X</span>
      </div>
      <div className="previeorderdetails">
        {
          items1 && items1.map((item) => (
            <div className="previewdetails" key={item.product}>
              <div className="previeimg">
                <img src="/images/book1.png" alt="book1.png" />
              </div>
              <div className="previewtitleprice">
                <h4>{item.title}</h4>
                <p>₹ 125</p>
              </div>
            </div>
          ))
        }
      </div>
      <div className="previeSubTotal">
        <p>SubTotal : ₹ {125*len}</p>
      </div>
    </div>
  )
}

export default PreviewOrderModal
