import {Button, Card} from 'react-bootstrap/';
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

function VehiclesView() {
    const [currentVehicle, setCurrentVehicle] = useState ([]);
    const {vehicleId} = useParams();

    useEffect(() => {
        const getCurrentVehicle = async () => {
          const res = await fetch(`https://swapi.py4e.com/api/vehicles/${vehicleId}`);
          const data = await res.json();
          setCurrentVehicle(data)
        }
    
       getCurrentVehicle();

      }, [])
  return (  
    <>

<div className="card flex-row border-0 my-3 ms-5"><img className="card-img-left" style={{ width: '20rem' }} src="https://images.unsplash.com/photo-1682702578726-bb6de39cce67?q=80&w=2980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
  <div className="card-body">
    <h4 className="card-title h5 h4-sm">{currentVehicle.name}</h4>
    <span className="card-text" style={{ fontWeight: 'bold' }}>Model: </span>
    <span className="card-text text-capitalize">{currentVehicle.model}</span><br />
    <span className="card-text" style={{ fontWeight: 'bold' }}>Crew: </span>
    <span className="card-text text-capitalize">{currentVehicle.crew}</span><br />
    
    <div className='my-3'>
    <Link to= '/vehicles'><Button variant="secondary">Back to Vehicles</Button></Link>
    </div>
  </div>
</div>
</>
  )
}


export default VehiclesView;