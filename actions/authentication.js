
import axios from 'axios';
import { GET_ERRORS , SET_CURRENT_USER} from './types';
import setAuthToken from '../setAuthToken';
import jwt_decode from 'jwt-decode';
export const registerUser = (user, history) => dispatch => {
    axios.post('/api/auth/register', user)
            .then(res => history.push('/login'))
            .catch(err => {
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                }); 
            });
}
  
export const loginUser = (user) => dispatch => {
    axios.post('https://pacific-anchorage-81247.herokuapp.com/api/auth/login', user)
            .then(res => {
                console.log(res);

               // const token  = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjExMjIiLCJpYXQiOjE1NTc0NzY4MDIsImV4cCI6MTU1NzU2MzIwMn0.WKVouobN_D6KPJOHLBu0UrAOoKbKzE2eypS5OCp8M5w";
               const { token } = res.data; 
               localStorage.setItem('jwtToken', token);
                localStorage.setItem('user' ,res.data.user);
                setAuthToken(token);
                const decoded = jwt_decode(token);
                dispatch(setCurrentUser(decoded));
                console.log(decoded.login);
            })
            .catch(err => {
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                });
            });
}
export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    }
}
export const logoutUser = (history) => dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthToken(false);
    dispatch(setCurrentUser({}));
    history.push('/login');
}

export const loginCard = (user) => dispatch => {
    axios.post('/api/auth/logincard', user)
            .then(res => {
                const { token } = res.data;
                localStorage.setItem('jwtToken', token);
                
                setAuthToken(token);
                const decoded = jwt_decode(token);
                dispatch(setCurrentUser(decoded));
                console.log(res.data);
            })
            .catch(err => {
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                });
            });
}