import React, { Component } from 'react';
import List from './list';
import { lists } from './list_data';
import { v4 as uuidv4 } from 'uuid';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

export default class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAddList: false,
      addListText: '',
      listData: lists,
    };
    this.addNewList = this.addNewList.bind(this);
    this.addNewTask = this.addNewTask.bind(this);

    this.hideNewListInput = this.hideNewListInput.bind(this);
    this.showNewListInput = this.showNewListInput.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handleDragEnd = this.handleDragEnd.bind(this);
  }

  handleDragEnd(result) {
    const { destination, source, draggableId, type } = result;
    console.log(type);

    if (!destination) {
      return;
    }
    if (
      destination.draggableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    if (type === 'column') {
      const newLists = [...this.state.listData];
      const spliceItem = this.state.listData[source.index];

      newLists.splice(source.index, 1);
      newLists.splice(destination.index, 0, spliceItem);
      this.setState({
        listData: newLists,
      });
      return;
    }

    const sourceListIndex = this.state.listData.findIndex(
      (item) => item.id === source.droppableId
    );
    const sourceList = this.state.listData[sourceListIndex];
    const newSourceList = [...sourceList.tasks];
    const sourceItem = newSourceList[source.index];
    const newLists = [...this.state.listData];

    newSourceList.splice(source.index, 1);

    if (source.droppableId === destination.droppableId) {
      newSourceList.splice(destination.index, 0, sourceItem);

      newLists[sourceListIndex].tasks = newSourceList;

      this.setState({
        listData: newLists,
      });
    } else {
      // Create copy of destination list with inserted item
      const destListIndex = this.state.listData.findIndex(
        (item) => item.id === destination.droppableId
      );
      const destList = this.state.listData[destListIndex];
      const newDestList = [...destList.tasks];
      newDestList.splice(destination.index, 0, sourceItem);

      // Set new state
      newLists[sourceListIndex].tasks = newSourceList;
      newLists[destListIndex].tasks = newDestList;

      this.setState({
        listData: newLists,
      });
    }
  }

  addNewTask(taskName, listId) {
    const listIndex = this.state.listData.findIndex(
      (element) => element.id === listId
    );
    const newLists = [...this.state.listData];
    newLists[listIndex].tasks.push({
      id: uuidv4(),
      title: taskName,
    });

    this.setState({
      listData: newLists,
    });
  }

  addNewList() {
    if (this.state.addListText !== '') {
      const lists = [...this.state.listData];
      lists.push({
        id: uuidv4(),
        name: this.state.addListText,
        tasks: [],
      });
      this.setState({
        listData: lists,
        addListText: '',
        showAddList: false,
      });
    }
  }

  onChange(e) {
    this.setState({ addListText: e.target.value });
  }

  showNewListInput() {
    this.setState({ showAddList: true });
  }

  hideNewListInput() {
    this.setState({ showAddList: false });
  }

  render() {
    const taskLists = this.state.listData.map((item, index) => (
      <div key={item.id}>
        <List
          key={item.id}
          id={item.id}
          title={item.name}
          newTask={this.addNewTask}
          cards={item.tasks}
          index={index}
        />
      </div>
    ));

    return (
      <DragDropContext onDragEnd={this.handleDragEnd}>
        <div className='board'>
          <Droppable
            droppableId='all-columns'
            direction='horizontal'
            type='column'
          >
            {(provided) => (
              <div
                className='board'
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {taskLists}
                {provided.placeholder}
              </div>
            )}
          </Droppable>

          <div className='add-list'>
            {!this.state.showAddList && (
              <div className='add-list-text' onClick={this.showNewListInput}>
                + Add another list
              </div>
            )}
            {this.state.showAddList && (
              <div className='list-add-card-form' onClick={this.onClick}>
                <textarea
                  className='list-add-card-input list-text-item'
                  placeholder='Enter a title for this card...'
                  value={this.state.addListText}
                  onChange={this.onChange}
                ></textarea>
                <button className='submit-btn' onClick={this.addNewList}>
                  Add Card
                </button>
                <button className='close-btn' onClick={this.hideNewListInput}>
                  X
                </button>
              </div>
            )}
          </div>
        </div>
      </DragDropContext>
    );
  }
}
