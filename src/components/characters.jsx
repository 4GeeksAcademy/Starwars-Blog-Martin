import {Button, Card} from 'react-bootstrap/';
import { Link } from 'react-router-dom';
import { FavoritesContext, FavoritesWrapper } from './favoritesContext';
import { useContext } from 'react';

function Characters({ data }) {
  const { store, actions } = useContext(FavoritesContext);

  return (
    <>
    
    {
     data.map(( people, id ) => {
      return (
      
    <Card key={`${id}`} className='col-md-4 p-0 mx-auto my-3' style={{ width: '17rem' }}>
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1595139280770-95b6de5f0635?q=80&w=3171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <Card.Body>
        <Card.Title className='d-flex'>
          {people.name}
         
          </Card.Title>
        <Card.Text>
          Click the button below to learn more about this character!
        </Card.Text>
        <Link to= {`${id + 1}`}><Button className='me-5' variant="primary">More Info</Button></Link>
        <Button className='ms-5' variant='info' onClick={() => actions.addFavorites(people)}>+</Button>
        </Card.Body>
    </Card>
    
      )
})
}
</>
  )
}


export default Characters;