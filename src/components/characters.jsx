import {Button, Card} from 'react-bootstrap/';
import { Link } from 'react-router-dom';

function Characters({ data }) {
  
  return (
    <>
    
    { data.map(( people, id ) => {
      return (
      
    <Card key={`${id}`} className='col-md-4 p-0 mx-auto my-3' style={{ width: '17rem' }}>
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1595139280770-95b6de5f0635?q=80&w=3171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <Card.Body>
        <Card.Title className='d-flex'>
          {people.name}
          <span className='col-2 ms-2'>
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
            </svg>
        </span>
          </Card.Title>
        <Card.Text>
          Click the button below to learn more about this character!
        </Card.Text>
        <Link to= {`${id + 1}`}><Button variant="primary">More Info</Button></Link>
        </Card.Body>
    </Card>
    
      )
})
}
</>
  )
}


export default Characters;