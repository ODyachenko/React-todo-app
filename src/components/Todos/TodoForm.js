import { useState } from 'react';
import Button from '../UI/Button';
import styles from './TodoForm.module.css';

function TodoForm({ addTodo }) {
  const [value, setValue] = useState('');

  function onSubmitHandler(event) {
    event.preventDefault();
    if (value) {
      addTodo(value);
      setValue('');
    }
  }

  return (
    <div className={styles.todoFormContainer}>
      <form onSubmit={onSubmitHandler}>
        <input
          value={value}
          onChange={(event) => setValue(event.target.value)}
          placeholder="Enter new todo"
        />
        <Button type="submit" title="Submit">
          Submit
        </Button>
      </form>
    </div>
  );
}
export default TodoForm;
