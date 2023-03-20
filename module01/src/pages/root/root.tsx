import React from 'react';
import './root.scss';
import Header from '../../components/header/ClassHeader';
import Card from '../../components/CardList/ClassCards';
import { List } from '../../components/CardList/List';

export default function Root() {
  return (
    <>
      <Header />
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
        <Card cards={List} />
      </div>
    </>
  );
}
