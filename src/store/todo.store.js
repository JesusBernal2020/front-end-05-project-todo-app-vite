import { Todo } from '../todos/models/todo.model';

const Filters = {
  All: 'all',
  Completed: 'Completed',
  Pending: 'Pending',
};

const state = {
  todos: [
    new Todo('Piedra del alma'),
    new Todo('Piedra de la mente'),
    new Todo('Piedra del univero'),
    new Todo('Piedra del tiempo'),
    new Todo('Piedra del poder'),
  ],
  filter: Filters.All,
};

const initStore = () => {
  console.log(state);
  console.log('InitStore 🚀');
};

const loadStore = () => {
  throw new Error('Not Implemented');
};

/**
 * Esta Funcion especifica el tipo de flitro
 * @param {Filters} filter tipos de filtro
 */
const getTodos = (filter = Filters.All) => {
  switch (filter) {
    case Filters.All:
      return [...state.todos];

    case Filters.Completed:
      return state.todos.filter((todo) => todo.done);

    case Filters.Pending:
      return state.todos.filter((todo) => !todo.done);

    default:
      throw new Error(`option ${filter} is not valid`);
  }
};

/**
 * Esta funcion resive la descripcion del todo
 * @param {String} description obteniendola creamos nuestros ToDos
 */
const addTodo = (description) => {
  if (!description) throw new Error('Description is requiered');

  state.todos.push(new Todo(description));
};

/**
 * Esta funcion recibe el identificador del todo
 * @param {String} todoId identificador
 */
const toggleTodo = (todoId) => {
  state.todos = state.todos.map((todo) => {
    if (todo.id === todoId) {
      todo.done = !todo.done;
    }

    return todo;
  });
};

/**
 * Esta funcion resive el id del todo y lo elimina
 * @param {String} todoId identificador
 */
const deleteTodo = (todoId) => {
  state.todos = state.todos.filter((todo) => todo.id !== todoId);
};

const deleteCompleted = () => {
  state.todos = state.todos.filter((todo) => todo.done);
};

/**
 *Funcion para selecionar el filtro
 * @param {Filters} newFilter seleccionar tipo de filtro
 */
const setFilter = (newFilter = Filters.All) => {
  //TODO: Averiguar esta validacion --> if(Object.keys(Filters).includes)
  state.filter = newFilter;
};

const getCurrentFilter = () => {
  return state.filter;
};

export default {
  addTodo,
  deleteCompleted,
  deleteTodo,
  getCurrentFilter,
  getTodos,
  initStore,
  loadStore,
  setFilter,
  toggleTodo,
};
