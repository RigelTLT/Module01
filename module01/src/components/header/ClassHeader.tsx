import React from 'react';
import { Component, ReactNode } from 'react';
import './header.scss';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Root from '../../pages/root/root';
//import About from '../../pages/about/about';

const Stack = createNativeStackNavigator();
export default class Header extends Component {
  render(): ReactNode {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Root} options={{ title: 'Home' }} />
        </Stack.Navigator>
      </NavigationContainer>
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
