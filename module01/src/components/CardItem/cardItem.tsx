import React from 'react';
import { Component, ReactNode } from 'react';
import './cardItem.scss';

export default class CardItem extends Component {
  render(): ReactNode {
    return (
      <div className="card-item">
        <div className="image">
          <img></img>
        </div>
        <h3 className="title"></h3>
        <p className="description"></p>
      </div>
    );
  }
}
