import React from 'react';
import { cardItems } from '../../components/CardList/List';
import CardItem from '../../components/CardItem/cardItem';

interface Card {
  id: string;
  image: string;
  price: number;
  title: string;
  description: string;
}

type CardListProps = {
  cards: Card[];
};
export default class Cards extends React.Component {
  constructor(props: CardListProps) {
    super(props);
    this.state = { cards: props };
  }
  render(): React.ReactNode {
    return (
      <div className="card-content">
        {cardItems.map((card) => (
          <CardItem {...card} key={card.id} />
        ))}
      </div>
    );
  }
}
