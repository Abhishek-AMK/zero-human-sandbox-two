import React from 'react';

const BookingSummary = ({ bookings }) => {
  return (
    <section className="booking-summary">
      <h2>Booking Summary</h2>
      <ul>
        {bookings.map(booking => (
          <li key={booking.id}>
            <strong>{booking.name}</strong> - {booking.date}
            <br />Confirmation: {booking.confirmationNumber}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default BookingSummary;