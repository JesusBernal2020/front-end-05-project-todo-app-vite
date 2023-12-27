import { v4 as uuid } from 'uuid';

export class Todo {
  /**
   * Esto crea una nueva instancia de la descripcion
   * @param {String} description del ToDo
   */
  constructor(description) {
    if (!description) throw new Error('description debe ser un string');

    this.id = uuid();
    this.description = description;
    this.done = false;
    this.createdAt = new Date();
  }
}
