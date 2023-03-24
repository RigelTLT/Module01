import React from 'react';
import { Component, ReactNode } from 'react';
import './header.scss';
import Root from '../../pages/root/root';
//import About from '../../pages/about/about';

export default class Header extends Component {
  render(): ReactNode {
    return (
      <header>
        <nav>
          <ul>
            <li>
              <a href={`/`}>Home</a>
            </li>
            <li>
              <a href={`/about`}>About us</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
//<Route path="/" element={<h2>Home</h2>} />
//<Route path="/about" element={<Products />}>
/*
<Stack.Screen name="Profile" component={ProfileScreen} />
<header>
        <nav>
          <ul>
            <li></li>
            <li></li>
          </ul>
        </nav>
      </header>*/
