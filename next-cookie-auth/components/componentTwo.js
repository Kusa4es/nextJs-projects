import React from 'react';

class ComponentTwo extends React.Component {

    constructor(props){
        super(props)
        this.state ={
            stateCompTwo: this.props.stateCompOne
        }
    }

    setElementMainValueFromComponentTwo = (e) => {
        //debugger
       this.props.setElementMain(e.target.innerText)
       console.log("-------->",this.state)
    }

    render(){
        return(
            <div>
                <p>ComponentTwo page</p>
                <button onClick={this.setElementMainValueFromComponentTwo}>setElementMainCompTwo</button>
                <p>state compOne: {this.state.stateCompTwo}</p>
            </div>
        )
    }
}

export default ComponentTwo;