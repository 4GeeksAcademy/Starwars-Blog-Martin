import {Button, Card} from 'react-bootstrap/';
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

function CharacterView() {
    const [character, setCharacter] = useState ([]);
    const {characterId} = useParams();

    useEffect(() => {
        const getCharacter = async () => {
          const res = await fetch(`https://flask-rest-hello-omwf.onrender.com/people/${characterId}`);
          const data = await res.json();
          setCharacter(data)
        }
    
       getCharacter();

      }, [])
      console.log('Character: ', character)
  return (  
    <>

<div className="card flex-row border-0 my-3 ms-5"><img className="card-img-left" style={{ width: '20rem' }} src="https://images.unsplash.com/flagged/photo-1589829482673-03413c918c48?q=80&w=3142&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
  <div className="card-body">
    <h4 className="card-title h5 h4-sm">{character.name}</h4>
    <span className="card-text" style={{ fontWeight: 'bold' }}>Gender: </span>
    <span className="card-text text-capitalize">{character.gender}</span><br />
    <span className="card-text" style={{ fontWeight: 'bold' }}>Height: </span>
    <span className="card-text text-capitalize">{character.height}</span><br />
    <div className='my-3'>
    <Link to= '/'><Button variant="secondary">Back to Characters</Button></Link>
    </div>
  </div>
</div>
</>
  )
}


export default CharacterView;