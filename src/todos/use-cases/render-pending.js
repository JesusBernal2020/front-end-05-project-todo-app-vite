import todoStore, { Filters } from '../../store/todo.store';

let element;
/**
 * Funcion que va a construir los pendientes del contador
 * @param {String} elementId es el elemento que se va gravar
 */
export const renderPending = (elementId) => {
  if (!element) element = document.querySelector(elementId);

  if (!element) throw new Error(`Element ${elementId} not fount`);

  element.innerHTML = todoStore.getTodos(Filters.Pending).length;
};
