import React from 'react';
import ToDoList from './components/TodoList';
import ToDoForm from './components/TodoForm';

const toDoItems = [
  {
    name: 'Dishes',
    id: 1,
    done: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor() {
    super();
    this.state = {
      toDoItems
    }
  }
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  toggleToDo = toDoId => {
    console.log("todo id", toDoId);

    this.setState({
      toDo: this.state.toDoItems.map(todo => {
        if (toDoId === todo.id) {
          return {
            ...todo,
            done: !todo.purchased
          };
        }
        return todo;
      })
    });
  };

  clearDone = e => {
    e.preventDefault();

    this.setState({
      toDoItems: this.state.toDoItems.filter(todo => !todo.done)
    });
  };

  addToDo = (e, todo) => {
    e.preventDefault();
    const newToDo = {
      name: todo,
      id: Date.now(),
      done: false
    };

    this.setState({ toDoItems: [...this.state.toDoItems, newToDo] });
  };

  render() {
    return (
      <div>
        <div className='header'>
          <h2>Welcome to your Todo App!</h2>
          <ToDoForm addToDo={this.addToDo} />
        </div>
        <ToDoList 
          todo={this.state.toDoItems} 
          toggleToDo={this.toggleToDo}
          clearDone={this.clearDone}
        />

      </div>
    );
  }
}

export default App;
