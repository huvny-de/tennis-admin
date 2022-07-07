import axiosIntance from "./token/api";
import TokenService from "./token/token.service";

const BASE_URL = 'https://171.244.136.52:4443/api/';

class AuthService {
  login(user) {
    return axiosIntance
      .post(BASE_URL +  "User/SignIn", {
        Username: user.username,
        Password: user.password,
        autoSignIn: true,
        clientId: 2,
      })
      .then((response) => {
        if (response.data.Token) {
          TokenService.setUser(response.data);
        }
        return response.data;
      });
  }
  logout() {
    TokenService.removeUser();
  }
  register(user) {
    return axiosIntance.post("/User/Register", {
      username: user.username,
      email: user.email,
      password: user.password,
      confirmPassword: user.confirmPassword,
      fullName: user.fullName,
      phoneNumber: user.phoneNumber,
      clientId: 2,
    });
  }
}

export default new AuthService();
