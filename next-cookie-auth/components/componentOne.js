import React from 'react';
import ComponentTwo from './componentTwo';

class ComponentOne extends React.Component {

    constructor(props){
        super(props)
        this.state ={
            stateCompOne:"123"
        }
    }

    setElementMainValue = (e) => {
       this.props.setElementMain(e.target.innerText)
       console.log(this.props)
    }

    render(){
        return(
            <div>
                <p>ComponentOne page</p>
                <button onClick={this.setElementMainValue}>setElementMainCompOne</button>
                <p>--------------------------------------------------</p>
                <ComponentTwo 
                    {...this.props} 
                    stateCompOne={this.state.stateCompOne}
                />
            </div>
        )
    }
}

export default ComponentOne;