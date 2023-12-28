import { creatTodoHTML } from './';

let element;
/**
 * Funcion para renderisar los Tdos
 * @param {String} elementId identificardor del elemento a renderizar
 * @param {Todo} todos si no vienen sera un Array vacio
 */
export const renderTodos = (elementId, todos = []) => {
  //referencia
  if (!element) element = document.querySelector(elementId);

  if (!element) throw new Error(`Element ${elementId} not found`);

  element.innerHTML = '';

  todos.forEach((todo) => {
    element.append(creatTodoHTML(todo));
  });
};
