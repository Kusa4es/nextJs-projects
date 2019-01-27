import {getUserProfile} from '../lib/auth';
import Layout from '../components/layout';

export default class Prodile extends React.Component {

    state = {
        user: null
    }

    componentDidMount(){
        getUserProfile().then(user => this.setState({user}))
    }

    render() {
        //debugger
        console.log("state profile: ", this.state)
        if(this.state.user === null ) {
            return <p>user is not autenticated</p>
        }
        return(
            <Layout title="Profile">
                <pre>
                    {JSON.stringify(this.state.user, null, 2)}
                </pre>
            </Layout>
            
        )
    }
}