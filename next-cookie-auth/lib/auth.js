import axios from 'axios';

axios.defaults.withCredentials = true;

export const loginUser = async (email, password) => {
   // debugger
    const { data } = await axios.post("/api/login", { email, password });
  console.log("data out: ",data)
}

export const getUserProfile = async () => {
   // debugger
    const {data} = await axios.get('/api/profile');
    console.log("user profile data: ",data)
    return data;
}