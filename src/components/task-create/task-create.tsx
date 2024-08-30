import { Component, State, h, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'task-create',
  styleUrl: 'task-create.css',
  shadow: true,
})
export class TaskCreate {
  @Event() taskCreated: EventEmitter;

  @State() title: string = '';
  @State() description: string = '';
  @State() status: string = 'pending';

  handleInputChange(event: Event) {
    const target = event.target as HTMLInputElement | HTMLTextAreaElement;
    const { name, value } = target;
    if (name === 'title') {
      this.title = value;
    } else if (name === 'description') {
      this.description = value;
    }
  }

  handleSelectChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.status = target.value;
  }

  async createTask() {
    const response = await fetch('http://localhost:3335/tasks', { // Cambia el puerto a 3305
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: this.title,
        description: this.description,
        status: this.status,
      }),
    });

    if (response.ok) {
      this.taskCreated.emit();
      alert('Tarea creada con éxito');
      this.title = '';
      this.description = '';
      this.status = 'pending';
    } else {
      alert('Error al crear la tarea');
    }
  }

  render() {
    return (
      <div>
        <input
          type="text"
          name="title"
          value={this.title}
          onInput={(event) => this.handleInputChange(event)}
          placeholder="Título de la tarea"
        />
        <textarea
          name="description"
          value={this.description}
          onInput={(event) => this.handleInputChange(event)}
          placeholder="Descripción de la tarea"
        ></textarea>
        <select name="status" onChange={(event) => this.handleSelectChange(event)}>
          <option value="pending">Pendiente</option>
          <option value="in-progress">En progreso</option>
          <option value="completed">Completada</option>
        </select>
        <button onClick={() => this.createTask()}>Crear Tarea</button>
      </div>
    );
  }
}
