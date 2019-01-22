import React from 'react';
import ComponentOne from '../components/componentOne';

class Main extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            elementMain: ""
        }
    }

    setElementMain(value) {
        this.setState({
            elementMain: value
        })
    }

    render(){
        return(
            <div>
                <p>Main page</p>
                <p>main state: {this.state.elementMain}</p>
                <p>-----------------------------------------------</p>
                <ComponentOne  
                    {...this.props} 
                    setElementMain={this.setElementMain.bind(this)}
                />
            </div>
        )
    }
}

export default Main;