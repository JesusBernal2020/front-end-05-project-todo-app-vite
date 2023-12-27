/**
 * Funcion crea el elemnto HTML
 * @param {Todo} todo
 */
export const creatTodoHTML = (todo) => {
  if (!todo) throw new Error('A TODO object is required');

  const html = `<h1>${todo.description}</h1>`;

  const liElement = document.createElement('li');
  liElement.innerHTML = html;

  return liElement;
};
