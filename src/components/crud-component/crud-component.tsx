import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'crud-component',
  styleUrl: 'crud-component.css',
  shadow: true,
})
export class CrudComponent {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
