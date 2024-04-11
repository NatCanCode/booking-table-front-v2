// App.js
import './App.css'
import {useState, useEffect} from 'react';
import { Link } from "react-router-dom";

function App() {

  const [reservations, setReservations] = useState([]);
  const [message, setMessage] = useState("");

  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVudkBnbWFpbC5jb20iLCJpZCI6MSwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzEyODMwMjYzLCJleHAiOjE3MTI4MzM4NjN9.CdpzxnOdvuAXSwMx5KpXogY1cYilAgEofeHvDqDKFYQ"

  useEffect(() => {
    // fetch
    fetch("http://localhost:3000/api/reservation", {
      method: "GET",
      headers: {
        "Authorization" : token,
      }
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data) 
      if (data.auth == false) {
        setMessage(data.message)
      } else {
        setReservations(data.reservations)
      }
    })
}, []);

  return (
    <>
      <h1>Simplon - REACT Frontend</h1>
      <Link to="/signup">Signup</Link>
      <p className="paragraph">First part</p>
      <p>{ message }</p>
      <ul className='reservationContainer'>
        { !message && reservations.map((r) => {
          return (
            <li className='reservation' key={r.id}>
              <div>Nombre de clients : {r.number_of_customers}</div>
              <div>Reservé par : {r.name}</div>
              <div>Note : {r.note}</div>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default App
