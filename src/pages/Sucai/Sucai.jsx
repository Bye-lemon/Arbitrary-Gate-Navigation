import React, { Component } from 'react';
import BrandShowCase from './components/BrandShowCase';

export default class Sucai extends Component {
  static displayName = 'Sucai';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="sucai-page">
        <BrandShowCase />
      </div>
    );
  }
}
