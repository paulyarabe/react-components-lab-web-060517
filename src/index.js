// Make sure to import React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';

const BUTCHER_PRODUCTS = [
  'Tenderloin',
  'Short ribs',
  'Beef shin',
  'Ribeye'
];

// Define these exported classes
export class OlderCoaster extends React.Component {
  render(){
    let paragraph1 = React.createElement('p', {}, 'Two grannies having the time of their life!')
    let paragraph2 = React.createElement('p', {}, 'Passengers:')
    let ulist = React.createElement('ul', {}, [
      React.createElement('li', {}, 'Agnes'),
      React.createElement('li', {}, 'Muriel')
    ])
    return React.createElement('div', { className: 'oldercoaster' }, [paragraph1, paragraph2, ulist])
  }

};

export class InFrontOfYou extends React.Component {
  render(){
    let paragraph1 = React.createElement('p', {}, "You shouldn't look too far.")
    let paragraph2 = React.createElement('p', {}, "Sometimes, the solution is right in front of you.")
    return React.createElement('div', {}, [paragraph1, paragraph2])
  }
};

export class ButcherShop extends React.Component {
  render(){
    let p = React.createElement('p', {}, 'Hello! We have the following products for sale today:')
    let ul = React.createElement('ul', {}, [
      BUTCHER_PRODUCTS.map(
        product => React.createElement('li', {}, product))
    ])
    return React.createElement('div', { className: 'butcher-shop' }, [p, ul])
  }
};

ReactDOM.render(
  React.createElement('div', {}, [
    React.createElement(OlderCoaster),
    React.createElement(InFrontOfYou),
    React.createElement(ButcherShop)
  ]),
  document.getElementById('root')
);
