import React from 'react';

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
  }
  render(): React.ReactNode {
    return <div className="card-content">
      {
this.props.cards.map(card =>(< />)
      }
    </div>;
  }
}
