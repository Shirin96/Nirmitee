import React, { useState } from 'react';
import './Todo.css';
import { List,ListItem,ListItemText,ListItemAvatar,Modal,Button} from '@material-ui/core'
import db from './firebase';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { makeStyles } from '@material-ui/core/styles';
 
const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

function Todo(props) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState();
    // const handleOpen = () =>{
    //     setOpen(true);
    // };
    // const handleOpen = () =>{
    //     setOpen(true);
    // };
 const updateTodo = () =>{

    //update the todo with the new input text
    db.collection('task').doc(props.todotask.id).set({
        todotask : input
    } , { merge:true })
     setOpen(false);
 }
    return (
        <>
        <Modal
            open={open}
            onClose={e => setOpen(false)}
        >
        <div className={classes.paper}>
            <h1>I am a modal</h1>
            <input placeholder={props.todotask.todo} value={input} onChange={event => setInput(event.target.value)} />
            <Button onClick={e => setOpen(updateTodo)}>Update Todo</Button>
        </div>
        </Modal>
        <List className="todo_list">
        <ListItem>
        <ListItemAvatar>
        </ListItemAvatar>
            <ListItemText primary={props.todotask.todo} secondary="Dummy deadline ⏰" />
        </ListItem>
        <button onClick={e => setOpen(true)}>Edit</button>
        <DeleteForeverIcon onClick={ event => db.collection('task').doc(props.todotask.id).delete()}> DELETE  </DeleteForeverIcon>
    
        </List>
        </>
    )
}

export default Todo
