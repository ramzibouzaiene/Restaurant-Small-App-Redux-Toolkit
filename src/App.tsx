import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { RootState } from "./app/store";
import ReservationCard from "./components/ReservationCard";
import { addReservation } from './features/reservationSlice'
import CustomerCard from "./components/CustomerCard";

function App() {
  const dispatch = useDispatch();
  const customers = useSelector((state: RootState) => state.customer.value)
  const reservation = useSelector((state: RootState) => state.reservations.value);
  const [reservationName, setReservationName] = useState('');

  const handleAddReservation = () => {
    if(!reservationName) return;
    dispatch(addReservation(reservationName));
    setReservationName('')
  }

  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {reservation.map((name, index) => {
                return <ReservationCard name={name} index={index}/>
              })}
            </div>
          </div>
          <div className="reservation-input-container">
            <input value={reservationName} onChange={(e) => setReservationName(e.target.value)}/>
            <button onClick={handleAddReservation}>Add</button>
          </div>
        </div>
        <div className="customer-food-container">
              {customers.map((customer) => {
                return <CustomerCard id={customer.id} name={customer.name} food={customer.food}/>
              })}
        </div>
      </div>
    </div>
  );
}

export default App;