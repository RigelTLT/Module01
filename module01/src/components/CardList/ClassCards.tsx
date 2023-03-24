import React from 'react';
import CardItem from '../../components/CardItem/cardItem';
import { Props } from '../../components/interface/interface';

export default class Cards extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }
  render(): React.ReactNode {
    const items = this.props.items;
    return (
      <div className="card-content">
        {items.cards.map((card) => (
          <CardItem {...card} key={card.id} />
        ))}
      </div>
    );
  }
}
