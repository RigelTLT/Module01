import React from 'react';
import { Component, ReactNode } from 'react';
import './header.scss';

export default class Header extends Component {
  render(): ReactNode {
    return (
      <header>
        <nav>
          <ul>
            <li>
              <a href={`../../pages/root/root.tsx`}>Home</a>
            </li>
            <li>
              <a href={`../../pages/about/about.tsx`}>About Us</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
