import Layout from "../components/layout";
import Link from "next/link";
import { authInitialProps } from "../lib/auth";
import React from 'react';
import Router from 'next/router';

// export default function Index(props) {
//   debugger
//   return (
//     <Layout title="Home" {...props}>
//       <Link href="/profile">
//         <a>Go to profile</a>
//       </Link>
//     </Layout>
//   );
// }

// Index.getInitialProps = authInitialProps();

export default class Index extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: ''
    }
  }

  getUser(){
    debugger
    //const user = authInitialProps(true);
    let newState = this.state;
    if(this.props.auth){
      newState.user = this.props.auth;
      this.setState(newState);
    }
    console.log(this.props)
    
  }

  componentDidMount(){
    debugger
    this.getUser();
  }

  render() {
    if(this.state.user === ''){
      <Router >

      </Router>
    }else{
      return (
        <Layout title="Home" {...this.props}>
          <Link href="/profile">
            <a>Go to profile</a>
          </Link>
        </Layout>
      )
    }
    
  }
}

Index.getInitialProps = authInitialProps();
