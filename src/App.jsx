// App.js
import './App.css'
import {useState, useEffect} from 'react';

function App() {

  const [reservations, setReservations] = useState([]);

  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlkIjoyMSwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzEwNDI4MjY0LCJleHAiOjE3MTA0MzE4NjR9.fUJCHtwhB7ZE23LYUpvnRzBzQ8szTFlj6Hdlmld-qXw";

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
      setReservations(data.reservations)
    })
}, []);

  return (
    <>
      <h1>Simplon - REACT Frontend</h1>
      <p className="paragraph">First part</p>
      <ul className='reservationContainer'>
        {reservations.map((r) => {
          return (
            <li className='reservation' key={r.id}>
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
