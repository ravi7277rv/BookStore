import React from 'react';
import './DeleteModal.css';

const DeleteModal = ({ setDeleteModal, id, deleteOrderfromList }) => {

    const handleConfirm = () => {
        deleteOrderfromList();
      };

  return (
    <div className='deleteBox'>
      <div className="deleteheading">
            <h3>Delete Order</h3> <span onClick={() => setDeleteModal(false)}>X</span>
      </div>
      <div className="deletecontent">
        <p>Are you sure to delete this Order No. {id} ?</p>
      </div>
      <div className="delbutton">
            <button onClick={() =>setDeleteModal(false) }>Cancle</button>
            <button onClick={handleConfirm}>Confirm</button>
      </div>
    </div>
  )
}

export default DeleteModal
