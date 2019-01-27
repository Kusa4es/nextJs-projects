import {loginUser}  from '../lib/auth';
import Router from 'next/router';


class LoginForm extends React.Component {
state = {
    email: '',
    password: '',
    error: '',
    isLoading: false
};

handleChange = event => {
    //debugger
    this.setState({
        [event.target.name]: event.target.value
    });
}

handleSubmit = event => {
   // debugger
    const {email,password} = this.state;
    event.preventDefault();
    this.setState({ error: '', isLoading: true})
    loginUser(email, password)
    .then(() => {
       // debugger
        Router.push("/profile");
    })
    .catch(this.showError)
}

showError = err => {
    //debugger
    console.error(err);
    const error = err.response && err.response.data || err.message;
    this.setState({error, isLoading: false});
}

    render(){
        //debugger
        const {email,password, error, isLoading} = this.state;
        return(
            <div>
                <h1>User info</h1>
                <p>user email:Sincere@april.biz </p>
                <p>user passw: hildegard.org</p>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input 
                            type="email"
                            name="email"
                            placeholder="email"
                            value={email}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <input 
                            type="password"
                            name="password"
                            placeholder="password"
                            value={password}
                            onChange={this.handleChange}
                        />
                    </div>
                    <button disabled={isLoading} type="submit">
                        {isLoading ? "Sending" : "Submit"}
                    </button>
                    {error && <div>{error}</div>}
                </form>
            </div>
            
        )
    }
}

export default LoginForm;