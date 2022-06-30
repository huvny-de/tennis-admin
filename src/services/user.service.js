import axios from 'axios';
import authHeader from './auth-header';
const API_URL = 'https://171.244.136.52:4443/api/'

class UserService {

    getAdminDashboard() {
        return axios.get(API_URL + 'user' , {header : authHeader()} )
    }   

    getYardOwnerDashboard() {
        return axios.get(API_URL + 'user' , {header : authHeader()} )
    }
}

export default new UserService()