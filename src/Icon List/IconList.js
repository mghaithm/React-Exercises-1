import React, { Component } from 'react';

class IconList extends Component{
    static defaultProps = {
        options: [
            "angry",
            "anchor",
            "archive",
            "at",
            "archway",
            "baby",
            "bell",
            "bolt",
            "bone",
            "car",
            "city",
            "cloud",
            "couch"
        ]
    };

constructor(props){
    super(props)
    this.state = {icons: ['bone','cloud']};
    this.addIcon = this.addIcon.bind(this);
}

addIcon(){
let idx = Math.floor(Math.random() * this.props.options.length);
let newIcon = this.props.options[idx];

//THE RIGHT WAY OF UPDATING A STATE OF AN OBJECT
//[...this.state.icons, newIcon]
this.setState({icons: [...this.state.icons, newIcon]});

//THIS IS A BAD WAY OF MUTATING OR UPDATEING STATE OF AN OBJECT  
// let oldIcons = this.state.icons;
// oldIcons.push(newIcon);
// this.setState({icons: oldIcons});
}

render() {
    const icons = this.state.icons.map(i => <i className={`fas fa-${i}`} />);
    console.log(icons);
    return(
        <div>
            <h1>Icons: {icons}</h1>
            <button onClick={this.addIcon}>Add New Icon</button>
        </div>
    )
}


}

export default IconList;