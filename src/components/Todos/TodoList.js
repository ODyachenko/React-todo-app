import Todo from './Todo';
import styles from './TodoList.module.css';

function TodoList({ todos, deleteTodoHandler, toggleTodo }) {
  return (
    <div className={styles.todoListContainer}>
      {!todos.length && <h2>Todo list is empty</h2>}
      {todos.map((todo) => {
        return (
          <Todo
            key={todo.id}
            todo={todo}
            deleteTodoHandler={deleteTodoHandler}
            toggleTodo={toggleTodo}
          />
        );
      })}
    </div>
  );
}
export default TodoList;
