import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import DeleteIcon from '@mui/icons-material/Delete';

function TodoList() {
  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState("");

  function addTodoList(event) {
    event.preventDefault();
    setTodoList([...todoList, todo]);
    setTodo("");
  }
  function removeTodoList(value) {
    // event.preventDefault();
    setTodoList(todoList.filter((todo) => todo !== value));
  }
  const arr = todoList.map((todo) => (
    <>
      {/* {" "}
      <li>{todo}</li>
      <Button onClick={(e) => removeTodoList(todo, e)} variant="outlined">
        Delete
      </Button> */}

      <ListItem
        disableGutters
        secondaryAction={
            <Button onClick={(e) => removeTodoList(todo, e)} variant="outlined" startIcon={<DeleteIcon />}>
              Delete
            </Button>
        }
      >
        <ListItemText primary={todo} />
      </ListItem>
    </>
  ));

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        onChange={(e) => setTodo(e.target.value)}
        id="filled-basic"
        label="Todo"
        variant="filled"
        value={todo}
      />
      <Button variant="outlined" onClick={(e) => addTodoList(e)}>
        add
      </Button>
      {/* <ul>{arr}</ul> */}
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {
          arr
          /* {[1, 2, 3].map((value) => (
          <ListItem
            key={value}
            disableGutters
            secondaryAction={
              <IconButton aria-label="comment">
                <CommentIcon />
              </IconButton>
            }
          >
            <ListItemText primary={`Line item ${value}`} />
          </ListItem>
        ))} */
        }
      </List>
    </Box>
  );
}

export default TodoList;
