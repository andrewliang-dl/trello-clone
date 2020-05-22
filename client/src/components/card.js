import React, { Component } from 'react';
import { Draggable } from 'react-beautiful-dnd';

export default class TodoCard extends Component {
  render() {
    return (
      <Draggable draggableId={this.props.task.id} index={this.props.index}>
        {(provided) => (
          <div
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            className='list-card list-text-item'
          >
            {this.props.task.title}
          </div>
        )}
      </Draggable>
    );
  }
}
