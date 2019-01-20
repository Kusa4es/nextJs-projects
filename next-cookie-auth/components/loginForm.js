import {loginUser}  from '../lib/auth';
import Router from 'next/router';


class LoginForm extends React.Component {
state = {
    email: '',
    password: ''
};

handleChange = event => {
    //debugger
    this.setState({
        [event.target.name]: event.target.value
    });
}

handleSubmit = event => {
    //debugger
    const {email,password} = this.state;
    event.preventDefault();
    loginUser(email, password).then(() => {
       // debugger
        Router.push("/profile");
    })
}

    render(){
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
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <input 
                            type="password"
                            name="password"
                            placeholder="password"
                            onChange={this.handleChange}
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
            
        )
    }
}

export default LoginForm;