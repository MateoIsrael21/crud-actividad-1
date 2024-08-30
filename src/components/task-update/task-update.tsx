import { Component, State, Prop, h, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'task-update',
  styleUrl: 'task-update.css',
  shadow: true,
})
export class TaskUpdate {
  @Prop() taskId: number;
  @Event() taskUpdated: EventEmitter;

  @State() title: string = '';
  @State() description: string = '';
  @State() status: string = 'pending';

  async componentWillLoad() {
    // Fetch task details for update
    const response = await fetch(`http://localhost:3305/tasks/${this.taskId}`);
    const task = await response.json();
    this.title = task.title;
    this.description = task.description;
    this.status = task.status;
  }

  handleInputChange(event) {
    const { name, value } = event.target;
    this[name] = value;
  }

  async updateTask() {
    const response = await fetch(`http://localhost:3335/tasks/${this.taskId}`, {
      method: 'PUT',
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
      this.taskUpdated.emit();
      alert('Tarea actualizada con éxito');
    } else {
      alert('Error al actualizar la tarea');
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
        <select name="status" onChange={(event) => this.handleInputChange(event)}>
          <option value="pending" selected={this.status === 'pending'}>Pendiente</option>
          <option value="in-progress" selected={this.status === 'in-progress'}>En progreso</option>
          <option value="completed" selected={this.status === 'completed'}>Completada</option>
        </select>
        <button onClick={() => this.updateTask()}>Actualizar Tarea</button>
      </div>
    );
  }
}
