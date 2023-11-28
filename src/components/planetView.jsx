import {Button, Card} from 'react-bootstrap/';
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

function PlanetView() {
    const [planet, setPlanet] = useState ([]);
    const {planetId} = useParams();

    useEffect(() => {
        const getPlanet = async () => {
          const res = await fetch(`https://swapi.py4e.com/api/planets/${planetId}`);
          const data = await res.json();
          setPlanet(data)
        }
    
       getPlanet();

      }, [])
  return (  
    <>

<div className="card flex-row border-0 my-3 ms-5"><img className="card-img-left" style={{ width: '20rem' }} src="https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
  <div className="card-body">
    <h4 className="card-title h5 h4-sm">{planet.name}</h4>
    <span className="card-text" style={{ fontWeight: 'bold' }}>Climate: </span>
    <span className="card-text text-capitalize">{planet.climate}</span><br />
    <span className="card-text" style={{ fontWeight: 'bold' }}>Population: </span>
    <span className="card-text text-capitalize">{planet.population}</span><br />
    <span className="card-text" style={{ fontWeight: 'bold' }}>Terrain: </span>
    <span className="card-text text-capitalize">{planet.terrain}</span><br />
    
    <div className='my-3'>
    <Link to= '/planets'><Button variant="secondary">Back to Planets</Button></Link>
    </div>
  </div>
</div>
</>
  )
}


export default PlanetView;