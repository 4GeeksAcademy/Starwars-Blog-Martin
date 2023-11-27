import './App.css';
import Header from './components/nav';
import Vehicles from './components/Vehicles';
import Characters from './components/Characters';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
    
      <div className='container-fluid mt-3'>
        <Header />
    
        <div className='row'>
      
            <Routes>
              <Route path='/' element={ <Characters /> } />
              <Route path='/vehicles' element={<Vehicles />} />
            </Routes>
       </div>
      </div>
    
    </>
  )
}

export default App
