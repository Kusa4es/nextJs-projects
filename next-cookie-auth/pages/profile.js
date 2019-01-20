import {getUserProfile} from '../lib/auth'

export default class Prodile extends React.Component {

    state = {
        user: null
    }

    componentDidMount(){
        getUserProfile().then(user => this.setState({user}))
    }

    render() {
        debugger
        console.log("state profile: ", this.state)
        if(this.state.user === null ) {
            return <p>user is not autenticated</p>
        }
        return(
            <div>
                <pre>
                    {JSON.stringify(this.state.user, null, 2)}
                </pre>
            </div>
            
        )
    }
}