import React, { Component } from 'react';

class CoinContainer extends Component {
  static defaultProps = {
    coins: [
      {side: 'heads', imgSrc: 'https://tinyurl.com/react-coin-heads-jpg'},
      {side: 'tails', imgSrc: 'https://tinyurl.com/react-coin-tails-jpg'}
    ]
  }
  constructor(props){
    super(props);
    this.state = {
      currentCoin: null,
      nFlips: 0,
      nHeads: 0,
      nTails: 0
    }
  }
  render() {
    return (
      <div className="CoinContainer">
        <h1>Let's flip a coin!</h1>
        <button>FLIP ME!</button>
        <p>Out of {this.state.nFlips} flips, there have been {this.state.nHeads} heads and {this.state.nTails} tails.</p>
      </div>
    );
  }
}

export default CoinContainer;
