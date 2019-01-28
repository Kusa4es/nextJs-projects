import axios from 'axios';

axios.defaults.withCredentials = true;

export const getServerSideToken = req => {
  const {signedCookies = {}} = req;
  if(!signedCookies) {
    return {};
  }else if(!signedCookies.token){
    return{};
  }
  return {user: signedCookies.token};
}

export const  getClientSideToken = () => {
  if (typeof window !== "undefined") {
    const user = window[WINDOW_USER_SCRIPT_VARIABLE] || {};
    return { user };
  }
  return { user: {} };
}

const WINDOW_USER_SCRIPT_VARIABLE = "__USER__";


export const getUserScript = user => {
  return `${WINDOW_USER_SCRIPT_VARIABLE} = ${JSON.stringify(user)};`;
} 

export const authInitialProps = () => ({req, res}) => {
  debugger
  const auth = req ? getServerSideToken(req) : getClientSideToken();
  return { auth };
}

export const loginUser = async (email, password) => {
   // debugger
    const { data } = await axios.post("/api/login", { email, password });
    if(typeof window !== 'undefine'){
      window[WINDOW_USER_SCRIPT_VARIABLE] = data || {};
    }
}

export const getUserProfile = async () => {
   // debugger
    const {data} = await axios.get('/api/profile');
    console.log("user profile data: ",data)
    return data;
}