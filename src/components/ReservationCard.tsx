import React from "react";
import { useDispatch } from "react-redux";
import { removeReservation } from "../features/reservationSlice";

interface ReservationCardTypes {
    name: string;
    index: number;
}

export default function ReservationCard( {name, index}: ReservationCardTypes){
    const dispatch = useDispatch();
    return <div onClick={() => {
        dispatch(removeReservation(index))
    }} className="reservation-card-container">{name}</div>
}