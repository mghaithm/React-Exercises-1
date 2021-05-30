import React, { Component } from 'react';

class ScoreKeeper extends Component{ 
    constructor(props){
        super(props);
        this.state = { score: 0 };
        this.singleKills = this.singleKills.bind(this);
        this.tripleKills = this.tripleKills.bind(this);
    }
    singleKills() {
        // this.setState({ score: this.state.score + 1}); bad, because setState is asynchronous

        this.setState( curState => {return {score: curState.score + 1}}); //using callback form using callback funckion
    }

    //update state based off of exisiting state.
    tripleKills() {
        this.setState( curState => {return {score: curState.score + 1}});
        this.setState( curState => {return {score: curState.score + 1}});
        this.setState( curState => {return {score: curState.score + 1}});

    }

    render(){
        return(
            <div>
                <h1>Score is {this.state.score}</h1>
                 {console.log(this.state.score)}
                <button onClick={this.singleKills}>Single Kills</button>
                <button onClick={this.tripleKills}>Tripple Kills</button>
            </div>
        )
    }

}

export default ScoreKeeper;