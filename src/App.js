import React from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = React.useState([
    {
      text:'learn react',
      isCompleted: true,
    },
    {
      text:'meet friend for lunch',
      isCompleted: false,
    },
    {
      text:'build todo app',
      isCompleted: false,
    }
  ]);
  const [value, setValue] = React.useState('');
  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    const newTodos = [...todos, {text:value, isCompleted:false}];
    setTodos(newTodos);
    setValue('');
  };
  const deleteTodos = e => {
    e.preventDefault();
    const index = Number(e.target.id);
    let temp = [...todos];
    temp.splice(index,1);
    setTodos(temp);

  };
  return (
    <main className="ctner m-auto d-flex align-items-center justify-content-center">
      <section className="p-3 border border-3 border-warning section-form">
        <h2>Add your Tasks</h2>
        <form onSubmit={handleSubmit}>
          <input 
            type="text"
            className="w-100"
            values={value}
            placeholder="Press Enter for add todo..."
            onChange={e => setValue(e.target.value)} 
          />
        </form>
        {todos.map((todo,i) => {
          return(
            <div className="m-3 text-white border-bottom border-1" key={i} id={i}>
              <label id={i} htmlFor={`input-${i}`} onClick={deleteTodos}>
                {todo.text}
              </label>
            </div>
          );
        })}
      </section>
    </main>
  );
}

export default App;
