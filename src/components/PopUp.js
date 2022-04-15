import React, { useState } from 'react'
import { OrderReview } from './OrderReview';
import Button from '@mui/material/Button';

export default function PopUp() {
    const [popup, setPopup] = useState(false);
    const togglePopup = () => {
        setPopup(!popup)
    }
    var statement = OrderReview();
  return (
      <>

      <button
      onClick={togglePopup}
      className='button-1'>
          Review
      </button>
      {popup && (
      <div>
          <div className="overlay"></div>
          <div className='popup-content'>
              <h2>Here is a review of your order:</h2>
              <div>
                  {statement}
              </div>
              <button className='close-popup' onClick={togglePopup}>
                  X
              </button>
          </div>
      </div>
      )}
      
      </>
  );
}
