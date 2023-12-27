import { creatTodoHTML } from './';

/**
 * Funcion para renderisar los Tdos
 * @param {String} elementId identificardor del elemento a renderizar
 * @param {Todo} todos si no vienen sera un Array vacio
 */
export const renderTodos = (elementId, todos = []) => {
  //referencia
  const element = document.querySelector(elementId);

  todos.forEach((todo) => {
    element.append(creatTodoHTML(todo));
  });
};
