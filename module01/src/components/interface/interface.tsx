export interface CardI {
  id: string;
  image: string;
  price: number;
  title: string;
  description: string;
}

export type CardListProps = {
  cards: CardI[];
};

export type Props = {
  items: CardListProps;
};
