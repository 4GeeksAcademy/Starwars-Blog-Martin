import './App.css';
import { useState, useEffect } from 'react';
import Header from './components/nav';
import VehiclesView from './components/VehiclesView';
import Vehicles from './components/Vehicles';
import Characters from './components/Characters';
import CharacterView from './components/characterView'
import Planets from './components/Planets';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [people, setPeople] = useState ([]);
  const [vehicles, setVehicles] = useState ([]);
  const [planets, setPlanets] = useState ([]);
 
  useEffect(() => {
    const getPeople = async () => {
      const res = await fetch("https://swapi.py4e.com/api/people/");
      const data = await res.json();
      setPeople(data.results)
    }

    const getVehicles = async () => {
      const res = await fetch("https://swapi.py4e.com/api/vehicles/");
      const data = await res.json();
      setVehicles(data.results)
    }
    const getPlanets = async () => {
      const res = await fetch("https://swapi.py4e.com/api/planets/");
      const data = await res.json();
      setPlanets(data.results)
    }

    getPeople();
    getVehicles();
    getPlanets();
    
  }, [])

  console.log('Planets: ', planets)
  console.log('People: ', people)
  console.log('Vehicles: ', vehicles)

  return (
    <>
    
      <div className='container-fluid mt-3'>
        <Header />
    
        <div className='row'>
            <Routes>
              <Route path='/' element={ <Characters data={ people }/> } />
              <Route path=':characterId' element={<CharacterView data={ people } />} />
              <Route path='/vehicles' element={<Vehicles data={ vehicles } />} />
              <Route path='/vehicles/:vehicleId' element={<VehiclesView data={ vehicles } />} />
              <Route path='/planets' element={<Planets data={ planets } />} />
            </Routes>
       </div>
      </div>
    
    </>
  )
}

export default App
