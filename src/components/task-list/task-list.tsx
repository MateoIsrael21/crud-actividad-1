import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'task-list',
  styleUrl: 'task-list.css',
  shadow: true,
})
export class TaskList {
  @State() tasks: any[] = [];

  async componentWillLoad() {
    // Hacer una solicitud a la API para obtener la lista de tareas
    const response = await fetch('http://localhost:3335/tasks');
    this.tasks = await response.json();
  }

  render() {
    return (
      <ul>
        {this.tasks.map(task => (
          <li key={task.id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>Status: {task.status}</p>
          </li>
        ))}
      </ul>
    );
  }
}
