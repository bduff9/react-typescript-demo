import React, { Component } from 'react';
import { CreateTodo } from './create-todo';
import { Todo } from './models';
import { TodoItem } from './todo-item';
import { DebugMode } from '../debug/debug-mode';

/**
 * @typedef {object} Props
 */

/**
 * @typedef {typeof initialState} State
 */

const initialState = {
  todos: /** @type {null | Todo[]} */ (null),
};

/**
 * @extends {Component<Props, State>}
 */
export class App extends Component {
  state = initialState;

  get todosLeftCount () {
    const { todos } = this.state;

    return todos ? todos.filter(({ done }) => !done).length : 0;
  }

  /**
   * @param {string} description
   */
  handleTodoCreate = description => {
    const { todos } = this.state;
    // $ExpectType Todo
    const newTodo = Todo(description);
    const newTodos = [...(todos || []), newTodo];

    this.setState(() => ({
      todos: newTodos,
    }));
  }

  /**
   * @param {string} id
   */
  handleTodoCompleteChange = id => {
    const { todos } = this.state;

    if (!todos) return;

    const newTodos = todos.map(todo => {
      return todo.id !== id ? todo : { ...todo, done: !todo.done };
    });

    this.setState(() => ({
      todos: newTodos,
    }));
  }

  /**
   * @param {string} id
   */
  handleTodoRemoval = id => {
    const { todos } = this.state;

    if (!todos) return;

    const newTodos = todos.filter(todo => todo.id !== id);

    this.setState(() => ({
      todos: newTodos,
    }));
  }

  render() {
    const { todos } = this.state;

    return (
      <main className="container">
        <h1 className="text-center">Todo App</h1>
        <DebugMode>{this.state}</DebugMode>
        <CreateTodo onCreate={this.handleTodoCreate} />
        {todos &&
          todos.map(todoItem => {
            return (
              <TodoItem
                model={todoItem}
                onCompleteChange={this.handleTodoCompleteChange}
                onRemove={this.handleTodoRemoval}
                key={todoItem.id}
              />
            );
          })}
        <p className="border border-muted padding-large text-center">
          Remaining todos: <b>{this.todosLeftCount}</b>
        </p>
      </main>
    );
  }
}
