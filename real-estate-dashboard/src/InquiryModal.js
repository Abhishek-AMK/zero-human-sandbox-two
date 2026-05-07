import React, { useState } from 'react';

const InquiryModal = ({ show, onClose }) => {
  return (
    <div className={`inquiry-modal ${show ? 'show' : ''}`} onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <h2>Inquire about this property</h2>
        <form>
          <label>Name:
            <input type="text" required />
          </label>
          <label>Email:
            <input type="email" required />
          </label>
          <label>Message:
            <textarea required></textarea>
          </label>
          <button type="submit">Send Inquiry</button>
        </form>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default InquiryModal;