import { Component, Prop, h, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'task-delete',
  styleUrl: 'task-delete.css',
  shadow: true,
})
export class TaskDelete {
  @Prop() taskId: number;
  @Event() taskDeleted: EventEmitter;

  async deleteTask() {
    const response = await fetch(`http://localhost:3335/tasks/${this.taskId}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      this.taskDeleted.emit();
      alert('Tarea eliminada con éxito');
    } else {
      alert('Error al eliminar la tarea');
    }
  }

  render() {
    return (
      <button onClick={() => this.deleteTask()}>Eliminar Tarea</button>
    );
  }
}
