import React, { Component } from 'react';
import './App.css';
//import Clicker from './Clicker/Clicker';
//import RollDice from './RollDice/RollDice';
//import ScoreKeeper from './ScoreKeeper/ScoreKeeper';
 //import IconList from './Icon List/IconList';
//import Lottery from './Lottery/Lottery';
//import CoinFlip from './Coin Flip/CoinFlip';
import BoxContainer from './Color Boxes/BoxContainer';

class App extends Component {
  render() {
    return (
    <div className="App">
     {// <Clicker /> 
     //<RollDice /> 
    // <ScoreKeeper />
    //<IconList />
     // <Lottery title='mini lot' numBalls={10} maxNum={70} />
     //<CoinFlip />
     }
     <BoxContainer />
    </div>
  );
  }
}

export default App;
