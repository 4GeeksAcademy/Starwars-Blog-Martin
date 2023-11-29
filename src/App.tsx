import './App.css';
import { useState, useEffect} from 'react';
import Header from './components/nav';
import PlanetView from './components/planetView';
import VehiclesView from './components/vehiclesView';
import Vehicles from './components/vehicles';
import Characters from './components/characters';
import CharacterView from './components/characterView'
import Planets from './components/planets';
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
    
      <div className='container-fluid p-0'>
        <Header />
    
        <div className='row mx-auto' style={{ width: '1200px' }}>
            <Routes>
              <Route path='/' element={ <Characters data={ people }/> } />
              <Route path=':characterId' element={<CharacterView data={ people } />} />
              <Route path='/vehicles' element={<Vehicles data={ vehicles } />} />
              <Route path='/vehicles/:vehicleId' element={<VehiclesView data={ vehicles } />} />
              <Route path='/planets' element={<Planets data={ planets } />} />
              <Route path='/planets/:planetId' element={<PlanetView data={ planets } />} />
            </Routes>
       </div>
      </div>
    
    </>
  )
}

export default App
