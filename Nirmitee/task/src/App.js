
import React, { useEffect, useState } from "react";
import Todo from './Todo';
import { Button,FormControl,Input,InputLabel} from '@material-ui/core';
import './App.css';
import db from './firebase';

import firebase from 'firebase';

function App() {
  const [todos, setTodos]= useState([]);
  const [input, setInput] = useState('');
 //when the upload we need to listen to the database and fetch new todos as they get added/ remove
   
 useEffect(() => {
   //this code here .. fires when the app.js loads
   db.collection('task').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
     setTodos(snapshot.docs.map(doc => ({id: doc.id,todo: doc.data().todotask})))
   })
 }, []);
  const addTodo = (event)=>{
    //this will fire off we click the button 
    event.preventDefault(); // it will stop refresh!!!
    db.collection('task').add({
      todotask: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput(''); //clear up the input after clicking add todo  button
  }
  return (
    <div className="App">
     <h1>Add Task🚀 </h1>
     <form>
        {/* <input value={ input } onChange={event => setInput(event.target.value)} /> */}
        <FormControl>
          <InputLabel>✅ Write a Todo </InputLabel>
          <Input value={ input } onChange={event => setInput(event.target.value)}  />
        </FormControl>
        <Button disabled ={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
            Add Task
        </Button>
        </form>
     <ul>
     {todos.map(todo => (
       <Todo todotask={todo} />
      // <li>{todo}</li>
     ))}
      
     </ul>
    </div>
  );
}

export default App;
