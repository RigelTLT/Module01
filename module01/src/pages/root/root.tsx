import React from 'react';
import './root.scss';
import Card from '../../components/CardList/ClassCards';
import { cardItems } from '../../components/CardList/List';
import { Props } from '../../components/interface/interface';

/*export default function Root() {
  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <div className="search-bar">
          <form className="search-form" role="search">
            <input
              className="search"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
            />
            <div id="search-spinner" aria-hidden hidden={true} />
            <div className="sr-only" aria-live="polite"></div>
            <button type="submit">&#128269;</button>
          </form>
        </div>
      </div>
      <div id="card-list">
        <Card cards={cardItems} />
      </div>
    </>
  );
}*/
export default class Root extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render(): React.ReactNode {
    return (
      <>
        <div id="sidebar">
          <h1>React Router Contacts</h1>
          <div className="search-bar">
            <form className="search-form" role="search">
              <input
                className="search"
                aria-label="Search contacts"
                placeholder="Search"
                type="search"
              />
              <div id="search-spinner" aria-hidden hidden={true} />
              <div className="sr-only" aria-live="polite"></div>
              <button type="submit">&#128269;</button>
            </form>
          </div>
        </div>
        <div id="card-list">
          <Card items={cardItems} />
        </div>
      </>
    );
  }
}
