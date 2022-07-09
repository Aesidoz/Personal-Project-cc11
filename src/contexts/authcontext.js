import axios from '../config/axios';
import { useNavigate } from 'react-router-dom';
import {
  getAccessToken,
  removeAccessToken,
  setAccessToken,
} from '../service/localStoreage';
import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();
function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();


  const fetchUserId = async (id) => {
    const  userId = await axios.get(`/userId/${id}`)
  }

  // useEffect(() => {
  //   try {
  //     fetchUserId



  //     const  userId = await axios.get(`/userId/${id}`)

  //   } catch (err) {
  //     console.log(err);
  //   }
  // }, []);

  useEffect(() => {
    const fetchMe = async () => {
      try {
        const token = getAccessToken();
        if (token) {
          const resMe = await axios.get('/user/me');
          console.log(resMe.data.user);
          setUser(resMe.data.myprofile);
        }
      } catch (err) {
        removeAccessToken();
        navigate('/signin');
      }
    };
    fetchMe();
  }, []);

  const register = async (input) => {
    const res = await axios.post('auth/register', input);
    setAccessToken(res.data.token);
    const resMe = await axios.get('user/me');
    setUser(resMe.data.myprofile);
  };

  const Login = async (userName, password) => {
    const res = await axios.post('auth/signin', { userName, password });
    setAccessToken(res.data.token);
    const resMe = await axios.get('user/me');
    console.log(resMe.data);
    setUser(resMe.data.myprofile);
  };

  const logout = async () => {
    removeAccessToken();
    setUser(null);
    navigate('/');
  };

  return (
    <AuthContext.Provider value={{ user, register, Login, logout, fetchUserId }}>
      {children}
    </AuthContext.Provider>
  );
}
const useAuth = () => {
  const ctx = useContext(AuthContext);
  return ctx;
};

export default AuthContextProvider;
export { AuthContext, useAuth };
