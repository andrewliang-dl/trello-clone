import React, { Component } from 'react';
import Card from './card';
import { Droppable } from 'react-beautiful-dnd';

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAddCard: false,
      addCardText: '',
    };
    this.onChange = this.onChange.bind(this);
    this.hideNewCardInput = this.hideNewCardInput.bind(this);
    this.showNewCardInput = this.showNewCardInput.bind(this);
    this.addCard = this.addCard.bind(this);
  }

  onChange(e) {
    this.setState({ addCardText: e.target.value });
  }

  showNewCardInput() {
    this.setState({ showAddCard: true });
  }

  hideNewCardInput() {
    this.setState({ showAddCard: false });
  }

  addCard() {
    if (this.state.addCardText !== '') {
      const text = this.state.addCardText;
      this.props.newTask(text, this.props.title);
      this.setState({ addCardText: '', showAddCard: false });
    }
  }

  render() {
    const cards = this.props.cards.filter(
      (item) => item.list === this.props.title
    );
    return (
      <div className='board-list'>
        <div className='list-header'>{this.props.title}</div>
        <Droppable droppableId={this.props.title}>
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className='list-cards'
            >
              {cards.map((item, index) => (
                <Card key={item.id} task={item} index={index} />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>

        {!this.state.showAddCard && (
          <div className='list-add-card' onClick={this.showNewCardInput}>
            + Add another card
          </div>
        )}
        {this.state.showAddCard && (
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
            <button className='submit-btn' onClick={this.addCard}>
              Add Card
            </button>
            <button className='close-btn' onClick={this.hideNewCardInput}>
              X
            </button>
          </div>
        )}
      </div>
    );
  }
}
