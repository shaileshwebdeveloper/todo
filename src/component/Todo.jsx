import React from "react";
import { useState } from "react";
import styles from "./todo.module.css";
import { TodoItem } from "./TodoItem";

const Todo = () => {
  let [newValue, setValue] = useState(""); //newValue = ""

  const [todos, setTodos] = useState([]); //todos = []

  const onDelete = (id) => {
    let newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const handleChange = (e) => {
    //event ban jata hai yaha
    setValue(e.target.value);
  };

  // console.log("input" , newValue)

  return (
    <div className={styles.marginDown}>
      <h1>TODO ASSIGNMENT</h1>
      <input className= {styles.input}  placeholder="Write Something"   value={newValue} onChange={handleChange} 
      // onKeyDownCapture ={(e) => {
      //     if(e.key === "Enter")
      //     {
      //       let a = [...todos, { id: Date.now(), value: newValue }]; //todos jama karra hai every input.
      //       setTodos(a);
      //       setValue("");
      //     }

      // }} 
      />
      <button
        className={styles.btn}
        onClick={() => {
          let a = [...todos, { id: Date.now(), value: newValue }]; //todos jama karra hai every input.
          setTodos(a);
          setValue("");
        }}
      >
     +
      </button>

      <div className={styles.todoList}>
        {todos.map(
          (
            todo // ye todo shayad se e ka kaam karega
          ) => (
            <TodoItem key={todo.id} todo={todo} onDelete={onDelete} />
          )
        )}
      </div>




      {/* TODOs */}
      {/* <div className={styles.todoList}>
        {todos.map(
          (
            todo // ye todo shayad se e ka kaam karega
          ) => (
            <TodoItem key={todo.id} todo={todo} onDelete={onDelete} />
          )
        )}
      </div> */}
    </div>
  );
};

export default Todo;
