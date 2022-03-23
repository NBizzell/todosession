import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import './App.css';
import View from './view';
import Add from './Add';

function App(){

  const [todos, changeTodos] = useState([
    { id: 1, description: "make static data", complete: false },
    { id: 2, description: "make dynamic data", complete: false }
  ])

  const updateList =(id, description, complete) =>{
    console.log(complete)
    const listItem = {id, description, complete}
    changeTodos((prevState) =>[...prevState, listItem] )
  }

    return (
        <Container>
          <Add updateList={(id, description, completed) => 
            updateList(id, description, completed)}
          />
          <View todos = {todos}/>
        </Container>
    );

}
export default App;
