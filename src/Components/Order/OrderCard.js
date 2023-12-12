import React, { Fragment, useState } from 'react';
import './OrderCard.css';
import DeleteIcon from '@mui/icons-material/Delete';
import PreviewIcon from '@mui/icons-material/Preview';
import { Modal } from '@mui/material';
import DeleteModal from './DeleteModal';
import { useSelector, useDispatch } from 'react-redux';
import { deleteOrder } from '../Redux/action/orderAction';
import PreviewOrderModal from './PreviewOrderModal';



const OrderCard = ({ item }) => {

  const dispatch = useDispatch();

  const [deletModal, setDeleteModal] = useState(false);
  const [previewModal, setPreviewModal] = useState(false);
  const [ordId, setOrdId] = useState(0);

  const handleDelete = (id) => {
    setOrdId(id);
    setDeleteModal(true)
  }

  const deleteOrderfromList = () => {
    dispatch(deleteOrder(ordId));
    setDeleteModal(false);
  };


  const handlePreview = (id) => {
    setOrdId(id);
    setPreviewModal(true);
  }

  return (
    <Fragment>
      {
        deletModal &&
        <Modal
          open={deletModal}
          onClose={() => setDeleteModal(false)}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <DeleteModal setDeleteModal={setDeleteModal} id={ordId} deleteOrderfromList={deleteOrderfromList} />
        </Modal>
      }

      {
        previewModal &&
        <Modal
        open={previewModal}
        onClose={() => setPreviewModal(false)}
        sx={{
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
          overflowY:"scroll",
        }}
        >
          <PreviewOrderModal  id={ordId} setPreviewModal={setPreviewModal} />
        </Modal>
      }

      <div className='order_list_maindiv'>
        <div className="order_data">
          <p>Order No. {item.orderId}</p>
        </div>
        <div className="order_action">
          <button onClick={() => handleDelete(item.orderId)}> <DeleteIcon /> </button>
          <button onClick={() => handlePreview(item.orderId)}> <PreviewIcon /> </button>
        </div>
      </div>
    </Fragment>
  )
}

export default OrderCard
