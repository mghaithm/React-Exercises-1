import React, { Component } from 'react';
import { choice } from './helper';
import Coin from './Coin';

class CoinFlip extends Component {

    static defaultProps = {
        coins: [
            {sides: 'heads', imgSrc: "https://tinyurl.com/react-coin-heads-jpg"},
            {sides: 'tails', imgSrc: "https://tinyurl.com/react-coin-tails-jpg"}
        ]
    }
 
    constructor(props){
        super(props);
        this.state = {
            currCoin: null,
           nFilps: 0,
           nHeads: 0,
           nTails: 0
        };
        this.handClick = this.handClick.bind(this);
        this.flip = this.flip.bind(this);
     

    }

    flip() {
      const newCoin = choice(this.props.coins);
      this.setState(st => {
          return {
          currCoin: newCoin,
          nFilps: st.nFilps +1,
          nHeads: st.nHeads + (newCoin.sides === "heads"?  1:0),
          nTails: st.nTails + (newCoin.sides === "tails"?  1:0)
          
      }
    })
}

    handClick(){
        this.flip();
    }


    render(){
        return(
            <div className="CoinContainer">
                <h1>Lets flip a coin!</h1>
               {//{this.state.currCoin && <img src={this.state.currCoin.imgSrc} alt={this.state.currCoin.sides}/>}\
               }
               {this.state.currCoin && <Coin info={this.state.currCoin}/> }
                <button onClick={this.handClick}>FLIP MEEE</button>
                <h2> out of ${this.state.nFilps} , there have been ${this.state.nHeads} Heads and {this.state.nTails} tails. </h2>
            </div>
        )
    }

}

export default CoinFlip;
