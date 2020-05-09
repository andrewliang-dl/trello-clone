import React, { Component } from 'react';
import List from './list';
import { lists, temp_data } from './list_data';
import { v4 as uuidv4 } from 'uuid';
import { DragDropContext } from 'react-beautiful-dnd';

export default class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAddList: false,
      addListText: '',
      listData: lists,
      cardData: temp_data,
    };
    this.addNewList = this.addNewList.bind(this);
    this.addNewTask = this.addNewTask.bind(this);

    this.hideNewListInput = this.hideNewListInput.bind(this);
    this.showNewListInput = this.showNewListInput.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  handleDragEnd(result) {}

  addNewTask(task, list) {
    const cards = [...this.state.cardData];
    cards.push({
      id: uuidv4(),
      title: task,
      list: list,
    });
    this.setState({
      cardData: cards,
    });
  }

  addNewList() {
    if (this.state.addListText !== '') {
      const lists = [...this.state.listData];
      lists.push({
        id: uuidv4(),
        name: this.state.addListText,
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
    const taskLists = this.state.listData.map((item) => (
      <div key={item.id}>
        <List
          key={item.id}
          title={item.name}
          newTask={this.addNewTask}
          cards={this.state.cardData}
        />
      </div>
    ));

    return (
      <DragDropContext onDragEnd={this.handleDragEnd}>
        <div className='board'>
          {taskLists}
          <div className='add-list'>
            {!this.state.showAddList && (
              <div className='add-list-text' onClick={this.showNewListInput}>
                + Add another list
              </div>
            )}
            {this.state.showAddList && (
              <div
                className='list-add-card-form'
                id={this.props.title}
                onClick={this.onClick}
              >
                <textarea
                  className='list-add-card-input list-text-item'
                  placeholder='Enter a title for this card...'
                  value={this.state.addCardText}
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
