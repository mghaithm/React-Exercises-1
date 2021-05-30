import React, { Component } from 'react';
import LotteryBall from './LotterBall';
import './Lottery.css';

class Lottery extends Component{
static defaultProps = {
    title: 'Lotto',
    numBalls : 6,
    maxNum : 40
    }

constructor(props){
    super(props);
    this.regenerate = this.regenerate.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
        nums: Array.from({length: this.props.numBalls})
        };
    }

    regenerate(){
        this.setState(curState => ({
            nums: curState.nums.map(
                n => Math.floor(Math.random() * this.props.maxNum) + 1 )
        }));
    }

    handleClick(){
        this.regenerate();
    }


    render(){
        return(
            <section className="Lottery">
                <h1>{this.props.title}</h1>
                <div> 
               { this.state.nums.map(n => 
               <LotteryBall num={n}/>) }
                
            </div>
            <button onClick={this.handleClick}>Generate</button>
            </section>        
            );
    }
}

export default Lottery;